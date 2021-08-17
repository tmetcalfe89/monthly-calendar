import React, { useState, useEffect } from 'react'
import { getDaysInMonth, getStartDayOffset } from './utils/date'
import DefaultControlBox from './ControlBox'
import DefaultDayCell from './DayCell'
import DefaultDateCell from './DateCell'

const MonthlyCalendar = ({
  ControlBox = DefaultControlBox,
  DayCell = DefaultDayCell,
  DateCell = DefaultDateCell,
  containerStyles = defaultStyles.container,
  dayContainerStyles = defaultStyles.day,
  dateContainerStyles = defaultStyles.date,
  controlBoxStyles = defaultStyles.control,
  defaultMonth = new Date(),
  defaultDate = null,
  onChangeMonth,
  onChangeDate
}) => {
  const [month, setMonth] = useState(defaultMonth)
  const [date, setDate] = useState(defaultDate)

  const monthMonth = month.getMonth() + 1
  const monthYear = month.getFullYear()

  const prev = () => setMonth(new Date(month.setMonth(month.getMonth() - 1)))
  const next = () => setMonth(new Date(month.setMonth(month.getMonth() + 1)))
  const today = () =>
    setMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1))

  useEffect(
    () =>
      onChangeMonth && onChangeMonth(month.getFullYear(), month.getMonth() + 1),
    [month]
  )

  useEffect(() => onChangeDate && onChangeDate(date), [date])

  return (
    <div style={containerStyles}>
      <div style={controlBoxStyles}>
        <ControlBox next={next} prev={prev} today={today} date={month} />
      </div>
      <div style={dayContainerStyles}>
        {days.map((e) => (
          <DayCell day={e} />
        ))}
      </div>
      <div style={dateContainerStyles}>
        {new Array(getStartDayOffset(monthMonth, monthYear))
          .fill(0)
          .map((e, i) => (
            <DateCell />
          ))}
        {new Array(getDaysInMonth(monthMonth, monthYear))
          .fill(0)
          .map((e, i) => (
            <DateCell
              date={new Date(monthYear, monthMonth - 1, i + 1)}
              currentSelection={date}
              setCurrentSelection={(date) => setDate(date)}
            />
          ))}
        {new Array(
          37 -
            getDaysInMonth(monthMonth, monthYear) -
            getStartDayOffset(monthMonth, monthYear)
        )
          .fill(0)
          .map((e, i) => (
            <DateCell />
          ))}
      </div>
    </div>
  )
}

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const defaultStyles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  control: {
    width: '100%',
    display: 'flex'
  },
  day: {
    width: `${100 / 7}%`,
    height: '2rem',
    display: 'flex',
    width: '100%'
  },
  date: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  }
}

export default MonthlyCalendar

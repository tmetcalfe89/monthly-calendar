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
  const [date, setDate] = useState(defaultMonth)
  const [activeDate, setActiveDate] = useState(defaultDate)

  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const prev = () => setDate(new Date(date.setMonth(date.getMonth() - 1)))
  const next = () => setDate(new Date(date.setMonth(date.getMonth() + 1)))
  const today = () =>
    setDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1))

  useEffect(
    () =>
      onChangeMonth && onChangeMonth(date.getFullYear(), date.getMonth() + 1),
    [date]
  )

  useEffect(() => onChangeDate && onChangeDate(activeDate), [activeDate])

  return (
    <div style={containerStyles}>
      <div style={controlBoxStyles}>
        <ControlBox next={next} prev={prev} today={today} date={date} />
      </div>
      <div style={dayContainerStyles}>
        {days.map((e) => (
          <DayCell day={e} />
        ))}
      </div>
      <div style={dateContainerStyles}>
        {new Array(getStartDayOffset(month, year)).fill(0).map((e, i) => (
          <DateCell />
        ))}
        {new Array(getDaysInMonth(month, year)).fill(0).map((e, i) => (
          <DateCell
            date={new Date(year, month - 1, i + 1)}
            activeDate={activeDate}
            setActiveDate={(date) => setActiveDate(date)}
          />
        ))}
        {new Array(
          37 - getDaysInMonth(month, year) - getStartDayOffset(month, year)
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

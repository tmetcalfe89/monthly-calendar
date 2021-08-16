import React from 'react'

const DateCell = ({ date }) => (
  <div style={styles.day}>{date && date.getDate()}</div>
)

const styles = {
  day: {
    width: `${100 / 7}%`,
    height: `${100 / 6}%`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default DateCell

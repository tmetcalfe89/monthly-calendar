import React, { Fragment } from 'react'

const ControlBox = ({ next, today, prev }) => (
  <>
    <button style={styles.button} onClick={prev}>
      Prev
    </button>
    <button style={styles.button} onClick={today}>
      Today
    </button>
    <button style={styles.button} onClick={next}>
      Next
    </button>
  </>
)

const styles = {
  button: {
    width: `${100 / 3}%`
  }
}

export default ControlBox

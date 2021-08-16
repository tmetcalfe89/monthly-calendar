import React from "react";

function DayCell({ day }) {
  return <div style={styles.day}>{day}</div>;
}

const styles = {
  day: {
    width: `${100 / 7}%`,
    height: `2rem`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
};

export default DayCell;

const dateToString = (date) => {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  return `${mm}-${dd}-${yyyy}`;
};

const dateEquals = (dateA, dateB) =>
  dateToString(dateA) === dateToString(dateB);

const isToday = (date) => dateEquals(date, new Date());

const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

const getStartDayOffset = (month, year) =>
  new Date(year, month - 1, 1).getDay();

export { dateToString, dateEquals, isToday, getDaysInMonth, getStartDayOffset };

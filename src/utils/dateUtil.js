export const compareDate = (selectedDate) => {
  const currentDate = new Date();
  const dateString = selectedDate.toISOString().split("T")[0];
  const currentDateString = currentDate.toISOString().split("T")[0];
  return dateString === currentDateString;
};

export const extractDate = (currentDate) => {
  return currentDate.toISOString().split("T")[0];
};

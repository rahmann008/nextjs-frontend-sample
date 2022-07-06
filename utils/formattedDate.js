const formattedDate = date => {
  return new Date(date).toDateString().slice(4);
};

export default formattedDate;

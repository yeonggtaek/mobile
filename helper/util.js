const twoPad = (str) => {
    return String(str).padStart(2, "0");
  };
  
  const dateToStringFormat = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
  
    return `${year}/${twoPad(month)}/${twoPad(day)} ${twoPad(hour)}:${twoPad(
      min
    )}:${twoPad(sec)}`;
  };
  
  export { dateToStringFormat };
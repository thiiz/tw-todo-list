const useDate = (date: Date) => {
  const today = new Date();
  const diffTime = Math.abs(date.getTime() - today.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return { formatedDate: "today" };
  } else if (diffDays === 1) {
    return { formatedDate: "yesterday" };
  } else {
    return { formatedDate: `${hour}:${minute} - ${month}/${day}/${year.toString().slice(2)}` }
  }
}

export { useDate }
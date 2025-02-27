export const dateFormat = (dateString) => {
  const date = new Date(dateString);
  return (
    date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    }) + " WIB"
  );
};
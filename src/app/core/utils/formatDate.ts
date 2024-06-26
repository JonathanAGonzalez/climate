export const getFormattedDate = (): string => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear().toString().slice(-2);
  const formattedDate = `${hours}:${minutes} - ${day} ${monthName} ${year}`;

  return formattedDate;
};

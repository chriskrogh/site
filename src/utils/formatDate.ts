export const formatDate = (date: Date): string =>
  `${date.getMonth() + 1}/${date.getFullYear() % 2000}`;

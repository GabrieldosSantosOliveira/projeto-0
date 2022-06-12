export const formatDate = (dateTime: string) => {
  const date = new Date(dateTime.toString());
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(date);
};

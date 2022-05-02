export const formatDate = (dateTime) => {
    const date = new Date(dateTime.toString())
    return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(date)
}
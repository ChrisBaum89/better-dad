export const formatDateTime = (dateTime) => {
    const dateTimeArray = []
    const formattedDateTime = new Date(dateTime)

    dateTimeArray.push(formattedDateTime.toDateString())
    dateTimeArray.push(formattedDateTime.toTimeString())

    return dateTimeArray
}

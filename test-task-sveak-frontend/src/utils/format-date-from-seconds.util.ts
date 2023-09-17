export function utilFormatDateFromSeconds(seconds: number): string {
    const milliseconds = seconds * 1000
    const date = new Date(milliseconds)

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const formattedDay = day < 10 ? `0${day}` : `${day}`
    const formattedMonth = month < 10 ? `0${month}` : `${month}`
    const formattedDate = `${formattedDay}.${formattedMonth}.${year}`

    return formattedDate
}

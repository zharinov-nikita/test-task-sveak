export const utilFormatMeta = (
    author?: string,
    published?: string | number,
    rating?: string | number
) => {
    const metaParts = []
    if (author) {
        metaParts.push(`${author} •`)
    }
    if (published) {
        metaParts.push(`${published} •`)
    }
    if (rating) {
        metaParts.push(`Rating ${rating}`)
    }
    return metaParts.join(' ')
}

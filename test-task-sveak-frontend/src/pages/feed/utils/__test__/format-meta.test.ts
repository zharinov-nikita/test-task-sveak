import { test, describe, expect } from 'vitest'
import { utilFormatMeta } from '../format-meta.util'

describe('utilFormatMeta', () => {
    test(() => {
        const author = 'John Doe'
        const published = '2023-09-15'
        const rating = 4.5
        const formattedMeta = utilFormatMeta(author, published, rating)
        expect(formattedMeta).toMatchSnapshot()
    })
})

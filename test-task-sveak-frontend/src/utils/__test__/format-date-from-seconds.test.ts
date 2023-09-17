import { test, expect, describe } from 'vitest'
import { utilFormatDateFromSeconds } from '../format-date-from-seconds.util'

describe('utilFormatDateFromSeconds', () => {
    test(() => {
        const seconds = 1632304000
        const formattedDate = utilFormatDateFromSeconds(seconds)
        expect(formattedDate).toBe('22.09.2021')
    })

    test(() => {
        const seconds = 1632024000
        const formattedDate = utilFormatDateFromSeconds(seconds)
        expect(formattedDate).toBe('19.09.2021')
    })

    test(() => {
        const seconds = 1679860800
        const formattedDate = utilFormatDateFromSeconds(seconds)
        expect(formattedDate).toBe('25.01.2024')
    })
})

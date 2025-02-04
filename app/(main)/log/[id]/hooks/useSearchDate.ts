import { useState } from 'react'

export const useSearchDate = () => {
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])

    const handleDateRangeChange = (value: [Date | null, Date | null]) => {
        setDateRange(value)
    }

    const getFormattedDates = () => {
        if (!dateRange[0] || !dateRange[1]) {
            return null
        }

        return {
            startDate: dateRange[0].toISOString().split('T')[0],
            endDate: dateRange[1].toISOString().split('T')[0],
        }
    }

    return { dateRange, handleDateRangeChange, getFormattedDates }
}

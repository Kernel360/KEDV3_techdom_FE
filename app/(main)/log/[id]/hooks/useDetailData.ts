import { useMemo } from 'react'

import { useData } from '@/hooks/useData'

import { DetailResponse } from '../types'

interface RequestData {
    url: string
    startDate?: string
    endDate?: string
}

export const useDetailData = ({ url, startDate, endDate }: RequestData) => {
    const params = useMemo(
        () => ({
            start: startDate || '2024-11-01',
            end: endDate || '2025-11-01',
        }),
        [startDate, endDate],
    )
    const { data, isLoading, error } = useData<DetailResponse>({
        url,
        params,
    })
    return { detailData: data, isLoading, error }
}

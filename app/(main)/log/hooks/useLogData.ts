import { useMemo } from 'react'

import { API_ENDPOINTS } from '@/constants/api'
import { useData } from '@/hooks/useData'

import { LogListResponse } from '../types'

export const useLogData = (page: number, keyword?: string) => {
    const params = useMemo(
        () => ({
            page,
            ...(keyword && { keyword }),
        }),
        [page, keyword],
    )

    const { data, isLoading, error } = useData<LogListResponse>({
        url: `${API_ENDPOINTS.LOG}`,
        params,
    })
    return { logData: data, isLoading, error }
}

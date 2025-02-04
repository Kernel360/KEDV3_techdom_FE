import { useEffect, useState } from 'react'

import { UseDataRequest } from '@/constants/api'
import { httpClient } from '@/lib/apis/client'

export const useData = <T>({ url, params }: UseDataRequest) => {
    const [data, setData] = useState<T>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const response = await httpClient.get(url, { params })
                setData(response.data.result)
            } catch (error) {
                setError('👾 데이터를 불러오지 못했습니다. 다시 시도해 주세요.')
                console.error('Error', error)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [url, params])

    return { data, isLoading, error }
}

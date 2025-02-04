import { ListItemModel } from '@/types/log'
export interface LogListResponse {
    content: ListItemModel[]
    page: number
    size: number
    totalElements: number
    totalPages: number
    first: boolean
    last: boolean
}

export type ApiType<T> = {
    isSuccess: boolean
    message: string
    result: T
}

import { logPath, noticePath, registerPath } from './constants'

export type LogType = (typeof logPath)[number]['label']
export type NoticeType = (typeof noticePath)[number]['label']
export type RegisterType = (typeof registerPath)[number]['label']
export type BreadcrumbType = LogType | NoticeType | RegisterType

export const breadcrumbPath = {
    운행기록: logPath,
    공지사항: noticePath,
    차량등록: registerPath,
} as const

export { logPath, noticePath, registerPath }

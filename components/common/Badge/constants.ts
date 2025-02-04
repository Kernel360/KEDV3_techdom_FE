export const BADGE_SHAPE = {
    RECTANGLE: 'rectangle',
    CIRCLE: 'circle',
} as const

export const OPERATION_STATUS = {
    IN_OPERATION: '운행중',
    NOT_DRIVEN: '미운행',
    NOT_REGISTERED: '미관제',
} as const

export const VEHICLE_ROLE = {
    GENERAL: '일반업무',
    COMMUTE: '출퇴근',
} as const

export const ZOOM_LEVEL = {
    // TODO: 범용성 고려
    INITIAL: 12,
    ROUTE: 8,
    SINGLE_VEHICLE: 7,
    MAX: 1,
    MIN: 12,
} as const

export const INITIAL_MAP_STATE = {
    // MAP_BOUNDS와 통합 고려
    center: {
        lat: 37.499955,
        lng: 127.017458,
    },
    level: ZOOM_LEVEL.INITIAL,
}

export const MAP_BOUNDS = {
    SW_LAT: 32.565491,
    SW_LNG: 120.637522,
    NE_LAT: 38.875321,
    NE_LNG: 135.513156,
}

export const MARKER_IMAGE = {
    src: '/icons/red-car-icon.svg',
    size: {
        width: 96,
        height: 96,
    },
    options: {
        offset: {
            x: 48,
            y: 48,
        },
    },
} as const

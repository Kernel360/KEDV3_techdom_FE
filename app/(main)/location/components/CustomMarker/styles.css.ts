import { createVar, style } from '@vanilla-extract/css'

// export const marker = style({
//     width: '75px !important',
//     height: '75px !important',
//     backgroundColor: 'red !important',
//     borderRadius: '50%',
// })

// vars를 사용하여 스타일 변수 정의
export const markerSize = createVar()
export const markerColor = createVar()

export const marker = style({
    width: markerSize,
    height: markerSize,
    backgroundColor: markerColor,
    borderRadius: '50%',
    vars: {
        [markerSize]: '75px',
        [markerColor]: 'red',
    },
})

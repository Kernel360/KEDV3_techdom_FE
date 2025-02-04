import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const base = style({
    margin: '10px',
    fontSize: vars.fontSizes.small,
    fontWeight: vars.fontWeights.bold,
})

export const message = styleVariants({
    error: {
        color: vars.colors.error,
    },
    success: {
        color: vars.colors.blue,
    },
})

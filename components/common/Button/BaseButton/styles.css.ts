import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const base = style({
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: vars.fontWeights.bold,
    borderRadius: '8px',
    color: vars.colors.black,
    ':disabled': {
        cursor: 'not-allowed',
        opacity: vars.opacity[50],
    },
})

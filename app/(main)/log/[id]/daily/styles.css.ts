import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '100%',
    height: '100vh',
    backgroundColor: vars.colors.dashboard,
    gap: '34px',
    padding: '30px',
    overflowY: 'auto',
})

export const contents = style({
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginTop: '30px',
})

export const leftSection = style({
    width: '50%',
})

export const rightSection = style({
    width: '50%',
})

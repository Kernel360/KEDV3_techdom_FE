import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
})

export const emoji = style({
    fontSize: vars.fontSizes.xxlarge,
})

export const text = style({
    fontSize: vars.fontSizes.mediumPlus,
    color: vars.colors.gray[700],
    margin: '20px',
    marginBottom: '20px',
})

export const button = style({
    maxWidth: '200px',
    margin: '30px',
    color: vars.colors.gray[600],
})

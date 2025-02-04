import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '76px',
    width: '100%',
    maxWidth: '700px',
    padding: '100px 0px ',
})

export const contentsWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
})

export const fieldWrapper = style({
    display: 'flex',
    alignItems: 'center',
})

export const textWrapper = style({
    width: '50%',
    maxWidth: '200px',
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.black,
})

export const inputWrapper = style({
    width: '50%',
    maxWidth: '500px',
    padding: '0px 30px',
})

import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '124px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'center',
})

export const titleWrapper = style({
    marginLeft: '-8px',
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    alignItems: 'center',
})

export const circle = style({
    width: '16px',
    height: '16px',
    borderRadius: '50%',
})

export const title = style({
    fontWeight: vars.fontWeights.bold,
})

export const count = style({
    fontSize: vars.fontSizes.xxlarge,
    fontWeight: vars.fontWeights.bold,
})

export const progressWrapper = style({
    width: '100%',
})

import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    display: 'flex',
    alignItems: 'center',
})

export const title = style({
    flex: 1,
})

export const progressWrapper = style({
    width: '400px',
})

export const circle = style({
    width: '16px',
    height: '16px',
    marginRight: '16px',
    borderRadius: '50%',
})

export const count = style({
    marginLeft: '8px',
    fontSize: vars.fontSizes.mediumPlus,
    fontWeight: vars.fontWeights.bold,
})

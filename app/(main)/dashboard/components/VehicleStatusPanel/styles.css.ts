import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    display: 'flex',
    backgroundColor: vars.colors.white,
    borderRadius: '12px',
    flexDirection: 'column',
    padding: '24px',
    gap: '16px',
    color: vars.colors.gray[800],
    fontWeight: vars.fontWeights.bold,
})

export const statusItem = style({
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

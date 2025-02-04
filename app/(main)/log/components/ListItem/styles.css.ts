import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '24px 0px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    color: vars.colors.black,
    fontWeight: vars.fontWeights.bold,
    fontSize: vars.fontSizes.mediumPlus,
    border: 'none',
    ':hover': {
        backgroundColor: vars.colors.gray[50],
    },
})

export const list = style({
    display: 'flex',
    width: '100%',
})

export const itemWrapper = style({
    flex: 1,
})

export const icon = style({
    width: '24px',
    height: '24px',
})

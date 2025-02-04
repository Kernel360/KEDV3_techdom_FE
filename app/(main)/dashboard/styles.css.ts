import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    height: '100vh',
    backgroundColor: vars.colors.dashboard,
    display: 'flex',
    gap: '34px',
    padding: '24px',
})

export const leftSection = style({
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
})

export const rightSection = style({
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
})

export const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const introduce = style({
    color: vars.colors.black,
    fontWeight: vars.fontWeights.extraBold,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '24px',
})

export const userName = style({
    fontSize: vars.fontSizes.xlarge,
})

export const searchInputWrapper = style({
    width: '358px',
})

export const mapWrapper = style({
    height: '100%',
    borderRadius: '14px',
    overflow: 'hidden',
})

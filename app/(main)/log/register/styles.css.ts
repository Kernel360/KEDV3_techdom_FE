import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    height: '100vh',
    padding: '40px 44px',
    overflow: 'auto',
})

export const title = style({
    fontSize: vars.fontSizes.xlarge,
    fontWeight: vars.fontWeights.bold,
    textAlign: 'center',
    marginTop: '20px',
})

export const formWrapper = style({
    display: 'flex',
    justifyContent: 'center',
})

export const buttonsWrapper = style({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '30px',
    maxWidth: '400px',
    margin: '0 auto',
})

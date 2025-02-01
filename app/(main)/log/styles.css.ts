import { style } from '@vanilla-extract/css'

export const container = style({
    height: '100vh',
    padding: '40px 44px',
    overflowY: 'auto',
})

export const contents = style({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
})

export const pagination = style({
    margin: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
})

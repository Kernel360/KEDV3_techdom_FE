import { style } from '@vanilla-extract/css'

export const container = style({
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
})

export const heading = style({
    fontSize: '44px',
    fontWeight: 'bold',
    color: 'white',
})

export const form = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
})

export const buttonWrapper = style({
    width: '100%',
    marginTop: '24px',
})

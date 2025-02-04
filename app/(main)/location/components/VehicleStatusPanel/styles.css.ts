import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    padding: '16px',
    position: 'absolute',
    top: '6.5rem',
    right: '2rem',
    zIndex: vars.zIndex.header,
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    justifyContent: 'center',
    alignItems: 'center',
    color: vars.colors.gray[800],
    backgroundColor: vars.colors.transparent[800],
    borderRadius: '14px',
})

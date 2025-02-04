import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    height: 0,
    flex: 1,
    backgroundColor: vars.colors.white,
    padding: '24px',
    borderRadius: '12px',
    display: 'flex',
    gap: '24px',
    flexDirection: 'column',
})

export const heading = style({
    color: vars.colors.black,
    fontSize: vars.fontSizes.large,
    fontWeight: vars.fontWeights.extraBold,
})

export const noticeList = style({
    overflowY: 'auto',
    msOverflowStyle: 'none', // IE, Edge 레거시 브라우저용
    scrollbarWidth: 'none', // Firefox용
    '::-webkit-scrollbar': {
        display: 'none', // Chrome, Safari용
    },
})

export const noticeItem = style({
    width: '100%',
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
})

export const imageWrapper = style({
    width: '100px',
    height: 'auto',
    borderRadius: '12px',
    overflow: 'hidden',
})

export const image = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
})

export const contentsWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
})

export const title = style({
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.black,
})

export const description = style({
    fontSize: vars.fontSizes.small,
    color: vars.colors.gray[800],
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const itemWrapper = style({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '24px 0px',
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
    color: styles.colors.black,
    fontWeight: styles.fontWeights.bold,
    fontSize: styles.fontSizes.mediumPlus,
})

export const itemContent = style({
    flex: 1,
})

export const icon = style({
    width: '24px',
    height: '24px',
})

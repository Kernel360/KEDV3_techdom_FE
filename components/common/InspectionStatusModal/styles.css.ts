import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@/styles/theme.css'

export const overlay = style({
    position: 'absolute',
    top: 0,
    right: 0,
    inset: 0,
    width: '100%',
    height: '100dvh',
    opacity: 0.2,
    backgroundColor: vars.colors.black,
    zIndex: vars.zIndex.overlay,
})

export const statusCard = recipe({
    base: {
        width: '100%',
        height: '100%',
        borderRadius: '11px',
        color: vars.colors.gray[800],
        padding: '16px',
        gap: '20px 20px',
        borderLeft: '12px solid',
        display: 'flex',
        alignItems: 'flex-start',
    },
    variants: {
        status: {
            required: { backgroundColor: vars.colors.pink[200], borderLeftColor: vars.colors.pink[700] },
            scheduled: { backgroundColor: vars.colors.yellow[100], borderLeftColor: vars.colors.yellow[200] },
            inProgress: { backgroundColor: vars.colors.green[100], borderLeftColor: vars.colors.green[300] },
            completed: { backgroundColor: vars.colors.purple[100], borderLeftColor: vars.colors.purple[200] },
        },
    },
})

export const container = style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '450px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: vars.colors.white,
    borderRadius: '12px',
    zIndex: vars.zIndex.modal,
})

export const iconWrapperBase = style({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const iconWrapper = styleVariants({
    bell: [iconWrapperBase, { backgroundColor: vars.colors.pink[700] }],
    alert: [iconWrapperBase, { backgroundColor: vars.colors.yellow[200] }],
    button: [iconWrapperBase, { backgroundColor: vars.colors.green[300] }],
    check: [iconWrapperBase, { backgroundColor: vars.colors.purple[200] }],
})

export const icon = style({
    width: '24px',
    height: '24px',
})

export const title = style({
    color: vars.colors.gray[800],
    fontWeight: vars.fontWeights.bold,
    marginBottom: '10px',
})

export const vehicleNumber = style({
    color: vars.colors.black,
    fontWeight: vars.fontWeights.extraBold,
    fontSize: vars.fontSizes.xlarge,
    marginBottom: '10px',
})

export const message = style({
    color: vars.colors.gray[800],
    marginBottom: '20px',
})

export const buttonGroup = style({
    width: '80px',
    display: 'flex',
    alignItems: 'center',
    fontSize: vars.fontSizes.small,
})

export const button = style({
    color: vars.colors.gray[700],
})

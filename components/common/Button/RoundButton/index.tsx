'use client'

import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { BaseButton } from '../BaseButton'

import * as styles from './style.css'

type SizeType = 'small' | 'large'
type ColorType = 'primary' | 'secondary'

interface RoundButtonProps extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode
    size?: SizeType
    color?: ColorType
    className?: string
}

export const RoundButton = ({ size = 'large', color = 'primary', children, className, ...props }: RoundButtonProps) => {
    return (
        <BaseButton
            className={`${styles.button.base} ${styles.sizeVariants[size]} ${styles.colorVariants[color]} ${className ?? ''}`}
            {...props}
        >
            {children}
        </BaseButton>
    )
}

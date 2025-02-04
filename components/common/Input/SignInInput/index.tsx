import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'

import BaseInput from '@/components/common/Input/BaseInput'

import * as styles from './styles.css'

interface SignInInputProps extends ComponentPropsWithoutRef<'input'> {
    icon: string
    type?: string
    onSubmit?: () => void
}

const SignInInput = ({ icon, type, onSubmit, ...props }: SignInInputProps) => {
    return (
        <div className={styles.signInInput}>
            <div className={styles.iconWrapper}>
                <Image src={icon} alt='로그인 검색 아이콘' width={24} height={24} />
            </div>
            <BaseInput type={type} className={styles.resetInput} onSubmit={onSubmit} {...props} />
        </div>
    )
}

export default SignInInput

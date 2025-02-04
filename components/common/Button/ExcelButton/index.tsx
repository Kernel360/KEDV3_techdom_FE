import Image from 'next/image'

import { RoundButton } from '../RoundButton'

import * as styles from './styles.css'

interface ExcelButtonProps {
    onClick?: () => void
}

const ExcelButton = ({ onClick }: ExcelButtonProps) => {
    return (
        <RoundButton color='secondary' size={'small'} onClick={onClick}>
            <div className={styles.button}>
                <Image src='/icons/green-excel-icon.svg' alt='excel' width={16} height={16} />
                엑셀
            </div>
        </RoundButton>
    )
}

export default ExcelButton

import { Progress } from '@mantine/core'

import * as styles from './styles.css'

interface VehicleStatusItemProps {
    total: number
    current: number
    color: string
    children?: React.ReactNode
}

const VehicleStatusItem = ({ total, current, color, children }: VehicleStatusItemProps) => {
    const percent = (current / total) * 100

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <span className={styles.circle} style={{ background: `${color}` }} />
                <h3 className={styles.title}>{children}</h3>
            </div>

            <p className={styles.count}>{current.toLocaleString()}</p>
            <div className={styles.progressWrapper}>
                <Progress color={color} radius='md' size='lg' value={percent} />
            </div>
        </div>
    )
}

export default VehicleStatusItem

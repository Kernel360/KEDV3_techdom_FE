import * as styles from './styles.css'

interface ControlBoxProps {
    vehicleNumber?: React.ReactNode
    control?: React.ReactNode
    button: React.ReactNode
    title: string
    children: React.ReactNode
    hasVehicleNumber?: boolean
}

const ControlBox = ({ vehicleNumber, control, button, title, children, hasVehicleNumber = false }: ControlBoxProps) => {
    return (
        <>
            <div className={styles.controlGroup}>
                {hasVehicleNumber && <div className={styles.vehicleNumber}>{vehicleNumber}</div>}
                {control}
                <div className={styles.button}>{button}</div>
            </div>

            <div className={styles.contents}>
                <h3 className={styles.title}>{title}</h3>
                {children}
            </div>
        </>
    )
}

export default ControlBox

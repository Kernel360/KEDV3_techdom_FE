import { BaseButton } from '../Button/BaseButton'

import * as styles from './styles.css'

type StatusType = 'required' | 'scheduled' | 'inProgress' | 'completed'
type IconType = 'bell' | 'alert' | 'button' | 'check'

export interface InspectionStatusModalModel {
    status: StatusType
    iconType: IconType
    icon: React.ReactNode
    title: string
    children: string
    message: string
}

interface InspectionStatusModalProps {
    inspectionStatusData: InspectionStatusModalModel[]
    isOpen?: boolean
    onClose?: () => void
}

const InspectionStatusModal = ({ inspectionStatusData, isOpen, onClose }: InspectionStatusModalProps) => {
    if (!isOpen) return null

    return (
        <>
            <div className={styles.overlay} role='presentation' />
            <div className={styles.container}>
                {inspectionStatusData.map((data) => {
                    return (
                        <div
                            key={data.status}
                            className={styles.statusCard({
                                status: data.status,
                            })}
                        >
                            <div>
                                <div className={styles.iconWrapper[data.iconType]}>
                                    <div className={styles.icon}>{data.icon}</div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.title}>{data.title}</div>
                                <div className={styles.vehicleNumber}>{data.children}</div>
                                <div className={styles.message}>{data.message}</div>

                                <div className={styles.buttonGroup}>
                                    <BaseButton className={styles.button} onClick={onClose}>
                                        취소
                                    </BaseButton>
                                    <BaseButton className={styles.button} onClick={() => {}}>
                                        승인
                                    </BaseButton>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default InspectionStatusModal

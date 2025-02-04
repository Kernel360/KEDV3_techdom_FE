'use client'

import Message from '@/components/common/Message'

import * as styles from './styles.css'

interface FormField {
    id: string
    label: string
    isError?: boolean
    component: React.ReactNode
    message?: string
}

interface VehicleRegisterFormProps {
    fields: FormField[]
}

const VehicleRegisterForm = ({ fields }: VehicleRegisterFormProps) => {
    return (
        <div className={styles.container}>
            {fields.map((field) => (
                <div key={field.id} className={styles.contentsWrapper}>
                    <div className={styles.fieldWrapper}>
                        <div className={styles.textWrapper}>{field.label}</div>
                        <div className={styles.inputWrapper}>{field.component}</div>
                    </div>
                    {field.message && <Message message={field.message} isError={field.isError} />}
                </div>
            ))}
        </div>
    )
}

export default VehicleRegisterForm

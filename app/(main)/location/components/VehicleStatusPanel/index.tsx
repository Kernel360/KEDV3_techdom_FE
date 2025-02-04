import React, { useEffect, useState } from 'react'

import VehicleStatusItem from '@/app/(main)/location/components/VehicleStatusItem'
import { vehicleService } from '@/lib/apis'
import { vars } from '@/styles/theme.css'
import { VehicleStatusModel } from '@/types/vehicle'

import * as styles from './styles.css'

const VehicleStatusPanel = () => {
    const [vehicleStatus, setVehicleStatus] = useState<VehicleStatusModel>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getVehicleStatus = async () => {
            try {
                setIsLoading(true)
                const vehicleStatus = await vehicleService.getVehicleStatus()
                setVehicleStatus(vehicleStatus)
            } catch (error) {
                console.error('차량현황 조회에 실패하였습니다', error)
            } finally {
                setIsLoading(false)
            }
        }
        getVehicleStatus()
    }, [])

    if (isLoading || !vehicleStatus) return

    return (
        <div className={styles.container}>
            <VehicleStatusItem
                total={vehicleStatus.allVehicles}
                current={vehicleStatus.allVehicles}
                color={vars.colors.primary}
            >
                전체 차량
            </VehicleStatusItem>

            <VehicleStatusItem
                total={vehicleStatus.allVehicles}
                current={vehicleStatus.engineOnVehicles}
                color={vars.colors.green[500]}
            >
                운행중 차량
            </VehicleStatusItem>

            <VehicleStatusItem
                total={vehicleStatus.allVehicles}
                current={vehicleStatus.engineOffVehicles}
                color={vars.colors.blue}
            >
                미운행 차량
            </VehicleStatusItem>
        </div>
    )
}

export default VehicleStatusPanel

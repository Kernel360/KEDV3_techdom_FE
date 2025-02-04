'use client'

import Image from 'next/image'

import Badge from '@/components/common/Badge'
import SquareButton from '@/components/common/Button/SquareButton'
import { useCoordToAddress } from '@/hooks/useCoordToAddress'
import { formatISODateToDot } from '@/lib/utils/date'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleDetailsModel } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleDetailsCardProps {
    vehicleDetails: VehicleDetailsModel
    onCloseButtonClick: (showDetailsCard: boolean) => void
}

const VehicleDetailsCard = ({ vehicleDetails, onCloseButtonClick }: VehicleDetailsCardProps) => {
    const {
        recentVehicleInfo: { vehicleNumber, status, lastEngineOn, lastEngineOff },
        recentCycleInfo: { speed, lat, lng, lastUpdated },
        todayDrivingHistory,
    } = vehicleDetails

    const normalizedCoordinate = {
        lat: normalizeCoordinate(lat),
        lng: normalizeCoordinate(lng),
    }

    // TODO: 다른 데이터 오류 가능성 체크
    const isDriving = status === 'ON'
    const formattedVehicleNumber = addSpaceVehicleNumber(vehicleNumber)
    const formattedLastEngineOn = formatISODateToDot(lastEngineOn)
    const formattedLastEngineOff = formatISODateToDot(lastEngineOff)
    const todayDrivingTime = todayDrivingHistory ? todayDrivingHistory.drivingTime : 0
    const todayDrivingDistance = todayDrivingHistory ? todayDrivingHistory.distance : 0

    const address = useCoordToAddress(normalizedCoordinate.lat, normalizedCoordinate.lng)

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <Badge shape='circle' variant={isDriving ? '운행중' : '미운행'} />
                    <h2 className={styles.vehicleNumber}>{formattedVehicleNumber}</h2>
                </div>
                <button onClick={() => onCloseButtonClick(false)} aria-label='차량 상세 정보 닫기'>
                    <Image src={'/icons/clear-icon.svg'} width={36} height={36} alt='닫기 버튼' />
                </button>
            </header>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                운행상태
                            </th>
                            <td className={styles.tableCell}>{isDriving ? '운행중' : '미운행'}</td>
                            <th scope='row' className={styles.tableHeader}>
                                속도
                            </th>
                            <td className={styles.tableCell}>{speed} km/h</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 ON
                            </th>
                            <td className={styles.tableCell}>{formattedLastEngineOn}</td>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 OFF
                            </th>
                            <td className={styles.tableCell}>{formattedLastEngineOff}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행시간
                            </th>
                            <td className={styles.tableCell}>{todayDrivingTime} 분</td>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행거리
                            </th>
                            <td className={styles.tableCell}>{todayDrivingDistance} km</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종수신
                            </th>
                            <td colSpan={3} className={styles.tableCell}>
                                {formatISODateToDot(lastUpdated)}
                            </td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종위치
                            </th>
                            <td colSpan={3} className={styles.tableCell}>
                                {address}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <SquareButton>경로보기</SquareButton>
        </article>
    )
}

export default VehicleDetailsCard

'use client'

import { useEffect, useState } from 'react'

import Calendar from '@/app/(main)/dashboard/components/Calendar'
import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import Map from '@/components/domain/map/Map'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'
import { WhiteAlertIcon, WhiteBellIcon, WhiteCheckIcon, WhiteOnButtonIcon } from '@/public/icons'
// import { useAuthStore } from '@/stores/useAuthStore'

import InspectionStatus from './components/InspectionStatus'
import NoticeListBoard from './components/NoticeListBoard'
import VehicleStatusPanel from './components/VehicleStatusPanel'
import * as styles from './styles.css'

const DashboardPage = () => {
    const {
        vehicleInfo,
        mapState,
        isVehicleVisible,
        searchTerm,
        modalMessage,
        isOpen,
        handleVehicleSearch,
        handleSearchChange,
        closeModal,
    } = useSearchSingleVehicle()

    const [companyName, setCompanyName] = useState<string>('')

    // const user = useAuthStore((state) => state.user)
    useEffect(() => {
        const companyName = localStorage.getItem('company_name') || '모니카'

        setCompanyName(companyName)
    }, [])

    const isVehicleMarkerVisible = !!(isVehicleVisible && vehicleInfo)

    return (
        <div className={styles.container}>
            <section className={styles.leftSection}>
                <header className={styles.header}>
                    <p className={styles.introduce}>
                        안녕하세요,
                        <span className={styles.userName}>{companyName} 님 👋</span>
                    </p>

                    <div className={styles.searchInputWrapper}>
                        <SearchInput
                            icon='/icons/search-icon.svg'
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onSubmit={handleVehicleSearch}
                        />
                    </div>
                </header>

                <InspectionStatus
                    inspectionStatusData={[
                        {
                            status: 'required',
                            icon: <WhiteBellIcon color='white' size={24} />,
                            text: '점검 필요',
                            iconType: 'bell',
                        },
                        {
                            status: 'scheduled',
                            icon: <WhiteAlertIcon color='white' size={24} />,
                            text: '점검 예정',
                            iconType: 'alert',
                        },
                        {
                            status: 'inProgress',
                            icon: <WhiteOnButtonIcon color='white' size={24} />,
                            text: '점검 진행',
                            iconType: 'button',
                        },
                        {
                            status: 'completed',
                            icon: <WhiteCheckIcon color='white' size={24} />,
                            text: '점검 완료',
                            iconType: 'check',
                        },
                    ]}
                />

                <VehicleStatusPanel />

                <div className={styles.mapWrapper}>
                    <Map center={mapState.center} zoom={mapState.level}>
                        {isVehicleMarkerVisible && <VehicleMarker vehicleInfo={vehicleInfo} />}
                    </Map>
                </div>
            </section>

            <section className={styles.rightSection}>
                <Calendar
                    calendarData={[
                        {
                            id: 1,
                            message: '즐거운 아침! 음악과 함께 시작.',
                            isActive: false,
                        },
                        {
                            id: 2,
                            message: '따뜻한 커피 한 잔은 건강에 좋아요.',
                            isActive: false,
                        },
                        {
                            id: 3,
                            message: '점심에는 스트레칭을 해볼까요?',
                            isActive: true,
                        },
                        {
                            id: 4,
                            message: '바이오리듬을 지키세요!',
                            isActive: false,
                        },
                        {
                            id: 5,
                            message: '눈 오는 날은 차량 운행에 주의하세요.',
                            isActive: false,
                        },
                    ]}
                />

                <NoticeListBoard />
            </section>

            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default DashboardPage

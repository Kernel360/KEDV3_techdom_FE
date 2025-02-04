'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

import VehicleDetailsCard from '@/app/(main)/location/components/VehicleDetailsCard'
import VehicleStatusPanel from '@/app/(main)/location/components/VehicleStatusPanel'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'
import { vehicleService } from '@/lib/apis'
import { VehicleDetailsModel, VehicleInfoModel } from '@/types/vehicle'

import * as styles from './styles.css'

const MapSection = dynamic(() => import('./components/MapSection'), {
    ssr: false,
})

const LocationPage = () => {
    const [isDetailsCardVisible, setIsDetailsCardVisible] = useState(false)
    const [vehicleDetails, setVehicleDetails] = useState<VehicleDetailsModel>()

    const {
        vehicleInfo,
        mapState,
        isVehicleVisible,
        searchTerm,
        modalMessage,
        isOpen,
        handleVehicleSearch,
        handleSearchChange,
        updateMapLocation,
        closeModal,
    } = useSearchSingleVehicle()

    const handleVehicleClick = async () => {
        const { vehicleId } = vehicleInfo as VehicleInfoModel
        const vehicleDetailsData = await vehicleService.getVehicleDetailInfo(vehicleId)

        setVehicleDetails(vehicleDetailsData)
        setIsDetailsCardVisible(true)
    }

    const isVehicleMarkerVisible = !!(isVehicleVisible && vehicleInfo)
    const isVehicleDetailsVisible = !!(isDetailsCardVisible && vehicleDetails)

    return (
        <div className={styles.container}>
            <MapSection
                mapState={mapState}
                vehicleInfo={vehicleInfo as VehicleInfoModel}
                isVehicleMarkerVisible={isVehicleMarkerVisible}
                onVehicleClick={handleVehicleClick}
                onClick={updateMapLocation}
            />
            <div className={styles.searchInputWrapper}>
                <SearchInput
                    icon='/icons/search-icon.svg'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onSubmit={handleVehicleSearch}
                />
            </div>
            <VehicleStatusPanel />
            {isVehicleDetailsVisible && (
                <VehicleDetailsCard vehicleDetails={vehicleDetails} onCloseButtonClick={setIsDetailsCardVisible} />
            )}

            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default LocationPage

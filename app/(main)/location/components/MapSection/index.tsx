'use client'

import { useEffect, useRef, useState } from 'react'
// import { CustomOverlayMap } from 'react-kakao-maps-sdk'

// import CustomMarker from '@/app/(main)/location/components/CustomMarker'
import { CustomOverlayMap } from 'react-kakao-maps-sdk'

import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
import Map from '@/components/domain/map/Map'
import { useMapStatus } from '@/hooks/useCurrentMapStatus'
// import { clusterService } from '@/lib/apis/cluster'
import { clusterService } from '@/lib/apis/cluster'
import { LatLng } from '@/types/location'
import { ClusterPoint, MapState } from '@/types/map'
import { VehicleInfoModel } from '@/types/vehicle'

import CustomMarker from '../CustomMarker'

interface MapSectionProps {
    mapState: MapState
    vehicleInfo: VehicleInfoModel
    isVehicleMarkerVisible: boolean
    onVehicleClick: () => void
    onClick: (location: LatLng, level: number) => void
}

const MapSection = ({ mapState, vehicleInfo, isVehicleMarkerVisible, onVehicleClick }: MapSectionProps) => {
    const [clusterInfo, setClusterInfo] = useState<ClusterPoint[]>([])
    const [clusterDetailInfo, setClusterDetailInfo] = useState<VehicleInfoModel | null>(null)
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    const mapRef = useRef<kakao.maps.Map>(null)

    const { currentMapState, updateMapStatus } = useMapStatus(mapRef.current)

    useEffect(() => {
        if (!isMapLoaded) return

        updateMapStatus()
    }, [isMapLoaded])

    useEffect(() => {
        if (!isMapLoaded || !currentMapState) return
        const getClusterInfo = async () => {
            const clusterInfo: ClusterPoint[] = await clusterService.getClusterInfo(currentMapState)
            // const clusterDetailInfo = await clusterService.getClusterDetailInfo(currentMapState)
            setClusterInfo(clusterInfo)
            // setClusterDetailInfo(clusterDetailInfo)
            console.log(clusterInfo)
            // console.log(clusterDetailInfo)
        }

        getClusterInfo()
    }, [isMapLoaded, currentMapState])

    return (
        <Map
            ref={mapRef}
            center={mapState.center}
            zoom={mapState.level}
            onLoad={() => setIsMapLoaded(true)}
            onMapStatusChanged={updateMapStatus}
        >
            {/* {ClusteringData.result.map((loc, index) => {
                return (
                    <CustomOverlayMap key={index} position={loc.coordinate}>
                        <CustomMarker count={loc.count} onClick={() => onClick(loc.coordinate, mapState.level - 1)} />
                    </CustomOverlayMap>
                )
            })} */}
            {clusterInfo?.map((point) => {
                return (
                    <CustomOverlayMap
                        key={`${point.lat}-${point.lat}`}
                        position={{ lat: point.lat / 1000000, lng: point.lng / 1000000 }}
                    >
                        <CustomMarker
                            count={point.count}
                            // onClick={() => onClick(point.coordinate, mapState.level - 1)}
                        />
                    </CustomOverlayMap>
                )
            })}
            {clusterDetailInfo && <VehicleMarker vehicleInfo={clusterDetailInfo} />}
            {isVehicleMarkerVisible && <VehicleMarker vehicleInfo={vehicleInfo} onVehicleClick={onVehicleClick} />}
        </Map>
    )
}

export default MapSection

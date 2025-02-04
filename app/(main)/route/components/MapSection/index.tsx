'use client'

import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/components/domain/map/Map'
import { vars } from '@/styles/theme.css'
import { LatLng } from '@/types/location'
import { MapState } from '@/types/map'

interface MapSectionProps {
    mapState: MapState
    vehiclePaths: LatLng[]
}

const MapSection = ({ mapState, vehiclePaths }: MapSectionProps) => {
    return (
        <Map center={mapState.center} zoom={mapState.level}>
            <Polyline
                path={[vehiclePaths]}
                strokeWeight={5}
                strokeColor={vars.colors.primary}
                strokeOpacity={1}
                strokeStyle={'solid'}
            />
        </Map>
    )
}

export default MapSection

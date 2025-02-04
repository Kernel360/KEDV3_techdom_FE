'use client'

import { memo } from 'react'
import { Map as KakaoMap, ZoomControl } from 'react-kakao-maps-sdk'

import ErrorMessage from '@/components/common/ErrorMessage'
import PageLoader from '@/components/common/PageLoader'
import { ZOOM_LEVEL } from '@/constants/map'
import { useKakaoLoader } from '@/hooks/useKakaoLoader'
import { LatLng } from '@/types/location'

interface MapProps {
    ref?: React.RefObject<kakao.maps.Map>
    center?: LatLng
    zoom?: number
    children?: React.ReactNode
    onLoad?: (isMapLoaded: boolean) => void
    onMapStatusChanged?: () => void
}

const Map = memo(
    ({ ref, center = { lat: 37.5665, lng: 126.978 }, zoom = 10, children, onLoad, onMapStatusChanged }: MapProps) => {
        const { loading, error } = useKakaoLoader()

        const handleCreate = () => {
            onLoad?.(true)
        }

        const handleMapStatusChange = () => {
            onMapStatusChanged?.()
        }

        if (loading) return <PageLoader />
        if (error) return <ErrorMessage />

        return (
            <KakaoMap
                ref={ref}
                center={center}
                level={zoom}
                maxLevel={ZOOM_LEVEL.MAX}
                minLevel={ZOOM_LEVEL.MIN}
                style={{ width: '100%', height: '100%' }}
                onCreate={handleCreate}
                onZoomChanged={handleMapStatusChange}
                onDragEnd={handleMapStatusChange}
            >
                {children}
                <ZoomControl />
            </KakaoMap>
        )
    },
)

Map.displayName = 'Map'

export default Map

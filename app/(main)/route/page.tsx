'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

import RouteSearchPanel from '@/app/(main)/route/components/RouteSearchPanel'
import { useMapControl } from '@/hooks/useMapControl'
import { LatLng } from '@/types/location'

import * as styles from './styles.css'

const MapSection = dynamic(() => import('./components/MapSection'), {
    ssr: false,
})

const RoutePage = () => {
    const [vehiclePaths, setVehiclePaths] = useState<LatLng[]>([])

    const { mapState, updateMapLocation } = useMapControl()

    return (
        <div className={styles.container}>
            <MapSection mapState={mapState} vehiclePaths={vehiclePaths} />
            <RouteSearchPanel onPathsChange={setVehiclePaths} onMapLocationChange={updateMapLocation} />
        </div>
    )
}

export default RoutePage

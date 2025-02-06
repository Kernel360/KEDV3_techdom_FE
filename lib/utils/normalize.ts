import { VehicleInfoModel, VehicleInfoResponse } from '@/types/vehicle'

export const normalizeCoordinate = (coordinateValue: number): number => Math.round(coordinateValue / 1000000)
export const denormalizeCoordinate = (coordinateValue: number): number => Math.round(coordinateValue * 1000000)

export const normalizeVehicleResponse = (data: VehicleInfoResponse): VehicleInfoModel => {
    return {
        vehicleId: data.vehicleId,
        vehicleNumber: data.vehicleNumber,
        coordinate: {
            lat: normalizeCoordinate(data.recentCycleInfo.lat),
            lng: normalizeCoordinate(data.recentCycleInfo.lng),
        },
    }
}

// export const normalizeClusterResponse = (data: ClusterInfoModel[]) => {
//     const filteredClusterInfo = data?.filter(
//         (clusterInfo): clusterInfo is ClusterInfoModel & { coordinate: LatLng } => clusterInfo.coordinate !== null,
//     )

//     const normalizedClusterInfo = filteredClusterInfo.map((clusterInfo: ClusterPoint) => {
//         return {
//             ...clusterInfo,
//             coordinate: {
//                 lat: normalizeCoordinate(clusterInfo.coordinate.lat),
//                 lng: normalizeCoordinate(clusterInfo.coordinate.lng),
//             },
//         }
//     })

//     return normalizedClusterInfo
// }

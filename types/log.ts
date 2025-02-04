export interface ListItemModel {
    id: number
    vehicleNumber: string
    vehicleModel: string
    drivingDays: number
    totalDistance: number
    status: VehicleStatusType
}

type VehicleStatusType = '운행중' | '미운행' | '미관제'

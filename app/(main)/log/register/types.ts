export interface VehicleTypeModel {
    id: number
    vehicleName: string
}

export interface RegisterVehicleModel {
    vehicleNumber: string
    vehicleTypeId: number
    deliveryDate: string | null
    drivingDistance: number
}

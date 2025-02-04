interface BusinessInfo {
    businessName: string
    businessRegistrationNumber: string
}

interface VehicleType {
    vehicleNumber: string
    vehicleModel: string
}

interface BusinessDrivingDetails {
    usePurpose: 'NORMAL' | 'COMMUTE'
    drivingDistance: number
}

interface DrivingInfo {
    drivingBefore: number
    drivingAfter: number
    totalDriving: number
    businessDrivingDetails: BusinessDrivingDetails
    notes: string
}

interface User {
    departmentName: string
    name: string
}

export interface DrivingRecord {
    id: number
    usageDate: string
    user: User
    drivingInfo: DrivingInfo
}

export interface DetailResponse {
    taxStartPeriod: string
    taxEndPeriod: string
    businessInfo: BusinessInfo
    taxPeriodDistance: number
    taxPeriodBusinessDistance: number
    businessUseRatio: number
    vehicleType: VehicleType
    records: DrivingRecord[]
}

import * as XLSX from 'xlsx'

import { EXCEL_FILE_NAME, EXCEL_SHEET_NAME } from '../../constants'
import { DetailResponse } from '../types'

interface ExcelData {
    사용일자: string
    부서: string
    성명: string
    전계기판거리: string
    후계기판거리: string
    주행거리: string
    출근용: string
    일반업무용: string
    비고: string
}

const getExcelData = (data: DetailResponse | undefined) => {
    if (!data || !data.records) return []

    return data.records.map((record) => ({
        사용일자: record.usageDate,
        부서: record.user.departmentName,
        성명: record.user.name,
        전계기판거리: `${record.drivingInfo.drivingBefore.toLocaleString('ko-KR')}km`,
        후계기판거리: `${record.drivingInfo.drivingAfter.toLocaleString('ko-KR')}km`,
        주행거리: `${record.drivingInfo.totalDriving.toLocaleString('ko-KR')}km`,
        출근용:
            record.drivingInfo.businessDrivingDetails.usePurpose === 'COMMUTE'
                ? `${record.drivingInfo.businessDrivingDetails.drivingDistance.toLocaleString('ko-KR')}km`
                : '0km',
        일반업무용:
            record.drivingInfo.businessDrivingDetails.usePurpose !== 'COMMUTE'
                ? `${record.drivingInfo.businessDrivingDetails.drivingDistance.toLocaleString('ko-KR')}km`
                : '0km',
        비고: record.drivingInfo.notes,
    }))
}

const saveExcel = (excelData: ExcelData[]) => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(excelData)
    XLSX.utils.book_append_sheet(wb, ws, EXCEL_SHEET_NAME)
    XLSX.writeFile(wb, EXCEL_FILE_NAME)
}

export const downloadExcel = (data: DetailResponse | undefined) => {
    const excelData = getExcelData(data)
    saveExcel(excelData)
}

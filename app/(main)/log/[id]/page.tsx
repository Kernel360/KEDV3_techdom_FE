'use client'

import { Loader } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

import Breadcrumb from '@/components/common/Breadcrumb'
import ExcelButton from '@/components/common/Button/ExcelButton'
import LinkButton from '@/components/common/Button/LinkButton'
import { RoundButton } from '@/components/common/Button/RoundButton'
import ControlLayout from '@/components/common/ControlLayout'
import ErrorMessage from '@/components/common/ErrorMessage'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { API_ENDPOINTS } from '@/constants/api'
import { useModal } from '@/hooks/useModal'
import { vehicleService } from '@/lib/apis/vehicle'
import { CalendarIcon } from '@/public/icons'

import '@mantine/dates/styles.css'
import 'dayjs/locale/ko'
import { useDetailData } from './hooks/useDetailData'
import * as styles from './styles.css'
import { downloadExcel } from './utils/excel'

const DetailPage = () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null])

    const { id } = useParams()
    const router = useRouter()
    const { logData, isLoading, error } = useDetailData({ url: `${API_ENDPOINTS.LOG}/${id}` })
    const { isOpen, modalMessage, closeModal, showMessage } = useModal()

    const handleExcelButtonClick = async () => {
        downloadExcel(logData)
    }

    const handleDeleteButtonClick = () => {
        showMessage('선택한 차량을 삭제하시겠습니까?')
    }

    const confirmDeleteVehicle = () => {
        if (!id) return
        deleteVehicle(Number(id))
    }

    const deleteVehicle = async (id: number) => {
        try {
            await vehicleService.deleteVehicle(id)
            router.push('/log')
        } catch (error) {
            console.error('차량 삭제 실패', error)
            showMessage('차량 삭제에 실패했습니다.')
        }
    }

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <Loader color='pink' />
            </div>
        )
    }
    if (error) {
        return <ErrorMessage />
    }

    return (
        <div className={styles.container}>
            <Breadcrumb type={'운행일지'} />

            <ControlLayout
                control={
                    <DatePickerInput
                        locale='ko'
                        leftSection={
                            <div style={{ width: '24px', height: '24px' }}>
                                <CalendarIcon size={16} stroke={1} />
                            </div>
                        }
                        leftSectionPointerEvents='none'
                        type='range'
                        size='lg'
                        radius='xl'
                        placeholder='날짜를 검색하세요.'
                        value={value}
                        onChange={setValue}
                        styles={{
                            input: {
                                width: '270px',
                                height: '48px',
                                fontSize: '16px',
                                color: '#222222',
                            },
                        }}
                    />
                }
                primaryButton={<ExcelButton onClick={handleExcelButtonClick} />}
                secondaryButton={
                    <RoundButton color='primary' size={'small'} onClick={handleDeleteButtonClick}>
                        <div className={styles.button}>
                            <Image src='/icons/white-trash-icon.svg' alt='add' width={18} height={18} />
                            삭제
                        </div>
                    </RoundButton>
                }
            />

            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'confirm', confirmButton: '확인', cancelButton: '취소' }}
                onClose={closeModal}
                onConfirm={confirmDeleteVehicle}
            />

            <div className={styles.tableWrapper}>
                <table>
                    <tbody>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                자동차 등록번호
                            </th>
                            <th scope='row' className={styles.tableHeader}>
                                차량종류
                            </th>
                        </tr>
                        <tr>
                            <td className={styles.tableCell}>{logData?.vehicleType.vehicleNumber}</td>
                            <td className={styles.tableCell}>{logData?.vehicleType.vehicleModel}</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <th scope='row' rowSpan={3} className={styles.tableHeader}>
                                과세기간
                            </th>
                            <td rowSpan={3} className={styles.tableCell}>
                                {logData?.taxStartPeriod} - {logData?.taxEndPeriod}
                            </td>
                            <th scope='row' rowSpan={2} className={styles.tableHeader}>
                                업무승용차 운행기록부
                            </th>
                            <th scope='row' className={styles.tableHeader}>
                                상호명
                            </th>
                            <td className={styles.tableCell}>{logData?.businessInfo.businessName}</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                사업자 등록번호
                            </th>
                            <td className={styles.tableCell}>{logData?.businessInfo.businessRegistrationNumber}</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <th scope='row' rowSpan={2} className={styles.tableHeader}>
                                사용일자
                            </th>
                            <th scope='row' colSpan={8} className={styles.tableHeader}>
                                운행내역
                            </th>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                부서
                            </th>
                            <th scope='row' className={styles.tableHeader}>
                                성명
                            </th>
                            <th scope='row' className={styles.tableHeader}>
                                전 계기판 거리
                            </th>
                            <th scope='row' className={styles.tableHeader}>
                                후 계기판 거리
                            </th>
                            <th scope='row' className={styles.tableHeader}>
                                주행거리
                            </th>
                            <th scope='row' className={styles.tableHeader}>
                                출근용
                            </th>
                            <th scope='row' className={styles.tableHeader}>
                                일반업무용
                            </th>
                            <th scope='row' className={styles.tableHeader}>
                                비고
                            </th>
                        </tr>
                        {logData?.records.map((data) => {
                            const isCommutePurpose = data.drivingInfo.businessDrivingDetails.usePurpose === 'COMMUTE'
                            const drivingDistance = data.drivingInfo.businessDrivingDetails.drivingDistance

                            return (
                                <tr key={data.id}>
                                    <td className={styles.tableCell}>{data.usageDate}</td>
                                    <td className={styles.tableCell}>{data.user.departmentName}</td>
                                    <td className={styles.tableCell}>{data.user.name}</td>
                                    <td className={styles.tableCell}>
                                        {data.drivingInfo.drivingBefore.toLocaleString('ko-KR')}km
                                    </td>
                                    <td className={styles.tableCell}>
                                        {data.drivingInfo.drivingAfter.toLocaleString('ko-KR')}km
                                    </td>
                                    <td className={styles.tableCell}>
                                        {data.drivingInfo.totalDriving.toLocaleString('ko-KR')}km
                                    </td>
                                    <td className={styles.tableCell}>
                                        {isCommutePurpose ? drivingDistance.toLocaleString('ko-KR') + 'km' : '0km'}
                                    </td>
                                    <td className={styles.tableCell}>
                                        {!isCommutePurpose ? drivingDistance.toLocaleString('ko-KR') + 'km' : '0km'}
                                    </td>
                                    <td className={styles.tableCell}>{data.drivingInfo.notes}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                과세기간 총 주행 거리
                            </th>
                            <td className={styles.tableCell}>{logData?.taxPeriodDistance.toLocaleString('ko-KR')}km</td>
                            <th scope='row' className={styles.tableHeader}>
                                과세기간 업무용 사용 거리
                            </th>
                            <td className={styles.tableCell}>
                                {logData?.taxPeriodBusinessDistance.toLocaleString('ko-KR')}km
                            </td>
                            <th scope='row' className={styles.tableHeader}>
                                업무사용비율
                            </th>
                            <td className={styles.tableCell}>{logData?.businessUseRatio}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <LinkButton href={`/log/${id}/daily`} className={styles.linkButton}>
                일별 및 시간별 조회
            </LinkButton>
        </div>
    )
}

export default DetailPage

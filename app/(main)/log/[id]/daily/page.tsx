'use client'

import { Select } from '@mantine/core'

import Breadcrumb from '@/components/common/Breadcrumb'
import ExcelButton from '@/components/common/Button/ExcelButton'
import ListHeader from '@/components/domain/vehicle/ListHeader'
import { DAILY_TITLES, HOURLY_TITLES } from '@/constants/listHeader'

import { default as ControlBox } from './components'
import * as styles from './styles.css'

const DailyPage = () => {
    return (
        <div className={styles.container}>
            <Breadcrumb type={'일별 및 시간별 운행기록'} />

            <div className={styles.contents}>
                <div className={styles.leftSection}>
                    <ControlBox
                        hasVehicleNumber={true}
                        title={'일별 운행기록'}
                        control={
                            <Select placeholder='1주일' data={['1주일', '1개월', '3개월']} size='md' radius='xl' />
                        }
                        button={<ExcelButton />}
                        vehicleNumber={'33가 1234'}
                    >
                        <ListHeader headerTitles={DAILY_TITLES} />
                    </ControlBox>
                </div>

                <div className={styles.rightSection}>
                    <ControlBox title={'시간별 운행기록'} button={<ExcelButton />}>
                        <ListHeader headerTitles={HOURLY_TITLES} />
                    </ControlBox>
                </div>
            </div>
        </div>
    )
}

export default DailyPage

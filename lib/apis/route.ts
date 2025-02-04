import { DateTime } from '@/app/(main)/route/types/date'
import { httpClient } from '@/lib/apis/client'
import { formatToISODate } from '@/lib/utils/date'

export const routeService = {
    getVehicleRoutesData: async (vehicleId: string, startDate: DateTime, endDate: DateTime, interval = 60) => {
        const formattedStartDate = formatToISODate(startDate)
        const formattedEndDate = formatToISODate(endDate)

        // console.log(vehicleId, formattedStartDate, formattedEndDate, interval)

        const response = await httpClient.get(`api/v1/vehicle/${vehicleId}/routes`, {
            params: {
                startTime: formattedStartDate,
                endTime: formattedEndDate,
                interval,
            },
        })
        console.log(response.data.result)

        return response.data.result
    },
}

import axios from 'axios'

import { API_URL } from '@/constants/api'
import { setupRequestInterceptor, setupResponseInterceptor } from '@/lib/apis/interceptors'

export const httpClient = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
    },
    // timeout: 5000,
})

setupRequestInterceptor(httpClient)
setupResponseInterceptor(httpClient)

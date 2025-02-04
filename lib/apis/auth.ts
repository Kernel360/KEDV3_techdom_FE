import { httpClient } from '@/lib/apis/client'

interface SignInRequestModel {
    userId: string
    password: string
}

export const authService = {
    postSignIn: async (userId: string, password: string) => {
        const signInData: SignInRequestModel = {
            userId,
            password,
        }

        const response = await httpClient.post(`api/v1/sign-in`, signInData)

        if (!response.data.isSuccess) {
            switch (response.data.errorCode) {
                case 9999:
                    // 인증 실패 (등록되지 않는 계정)
                    return { isSuccess: false, error: 'INVALID_CREDENTIALS' }
                default:
                    // 서비스 에러
                    return { isSuccess: false, error: 'SERVICE_ERROR' }
            }
        }

        return { isSuccess: true }
    },
    postSignOut: async () => {
        const response = await httpClient.post(`api/v1/logout`)

        console.log(response)
    },
    postSignUp: async (email: string, nickname: string, loginId: string, password: string) => {
        const signUpData = {
            email,
            nickname,
            loginId,
            password,
        }

        const response = await httpClient.post(`api/v1/sign-up`, signUpData)

        if (!response.data.isSuccess) {
            if (response.data.errorCode) {
                return { isSuccess: false, message: response.data.errorMessage }
            }
        }

        return { isSuccess: true }
    },
    getUserInfo: async () => {
        const response = await httpClient.get(`api/v1/me`)

        const { nickname, email, departmentName, companyName } = response.data.result
        return { nickname, email, departmentName, companyName }
    },
}

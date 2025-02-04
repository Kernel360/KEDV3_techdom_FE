import { DateTime, SearchableDateTime } from '@/app/(main)/route/types/date'
import { formatToISODate } from '@/lib/utils/date'
import { removeSpaces, trimValue } from '@/lib/utils/string'

// 이메일 형식 검증
export const isValidEmailFormat = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return emailRegex.test(email)
}

// 영어+숫자 (한글, 공백 제외)영어과 숫자만 허용 (한글, 공백 제외)
const isAlphanumeric = (value: string) => {
    const alphanumericRegex = /^[A-Za-z0-9]+$/
    return alphanumericRegex.test(trimValue(value))
}

// 한글과 숫자만 허용
export const isKoreanAndNumbersOnly = (value: string) => {
    const koreanNumberRegex = /^[\u3131-\uD79D0-9]+$/
    return koreanNumberRegex.test(value)
}

// 차량 번호 형식 검증
export const isValidVehicleNumberFormat = (value: string) => {
    const vehicleNumberRegex = /^(\d{2}|\d{3})[가-힣]\d{4}$/
    return vehicleNumberRegex.test(value)
}

// 모든 Select가 선택되었는지 확인
const isAllFieldsSelected = (date: DateTime) => Object.values(date).every(Boolean)

// 시작일이 종료일보다 이전인지 확인
const isStartDateBeforeEndDate = (startDate: Date, endDate: Date) => {
    return startDate.getTime() < endDate.getTime()
}

// 날짜가 특정 범위 내에 있는지 확인
const isDateWithinRange = (targetDate: Date, rangeStart: Date, rangeEnd: Date) => {
    return rangeStart.getTime() <= targetDate.getTime() && targetDate.getTime() <= rangeEnd.getTime()
}

// 로그인 입력 유효성 검증
export const validateEmail = (userId: string) => {
    if (!trimValue(userId)) {
        return {
            isValid: false,
            message: '아이디를 입력해주세요',
        }
    }

    if (!isAlphanumeric(userId)) {
        return {
            isValid: false,
            message: '영문과 숫자만 입력해주세요',
        }
    }

    if (userId.length < 4) {
        return {
            isValid: false,
            message: '아이디를 4자 이상 입력해주세요',
        }
    }

    if (userId.length > 50) {
        return {
            isValid: false,
            message: '아이디은 50자를 초과할 수 없습니다',
        }
    }

    return {
        isValid: true,
        value: userId,
    }
}

// 비밀번호 입력 유효성 검증
export const validatePassword = (password: string) => {
    if (!trimValue(password)) {
        return {
            isValid: false,
            message: '비밀번호를 입력해주세요',
        }
    }

    if (password.length < 4) {
        return {
            isValid: false,
            message: '비밀번호는 최소 4자 이상이어야 합니다',
        }
    }

    if (password.length > 20) {
        return {
            isValid: false,
            message: '비밀번호는 20자를 초과할 수 없습니다',
        }
    }

    return {
        isValid: true,
        value: password,
    }
}

// 차량번호 유효성 검증
export const validateVehicleNumber = (searchTerm: string) => {
    if (!trimValue(searchTerm)) {
        return {
            isValid: false,
            message: '차량번호를 입력해주세요',
        }
    }

    const removedBlank = removeSpaces(searchTerm)

    if (!isKoreanAndNumbersOnly(removedBlank)) {
        return {
            isValid: false,
            message: '차량번호는 숫자/한글만 입력 가능합니다',
        }
    }

    if (!isValidVehicleNumberFormat(removedBlank)) {
        return {
            isValid: false,
            message: '올바른 차량번호 형식이 아닙니다\n(예시 : 12가 1234 또는 123가 1234)',
        }
    }

    return {
        isValid: true,
        value: removedBlank,
    }
}

// 기간검색 날짜 유효성 검증
export const validateDateSelection = (startDate: DateTime, endDate: DateTime, searchableRange: SearchableDateTime) => {
    // 윤년 체크 (e.g. 2월 31일)
    const isValidDate = () => {
        const newStartDate = new Date(Number(startDate.year), Number(startDate.month) - 1, Number(startDate.date))
        const newEndDate = new Date(Number(endDate.year), Number(endDate.month) - 1, Number(endDate.date))

        return (
            newStartDate.getMonth() === Number(startDate.month) - 1 &&
            newEndDate.getMonth() === Number(endDate.month) - 1
        )
    }

    // 모든 Select 체크 유무
    const isAllSelected = () => isAllFieldsSelected(startDate) && isAllFieldsSelected(endDate)

    // 조회 가능 기간 내 선택 유무
    const isWithSearchableRange = () => {
        const newStartDate = new Date(formatToISODate(startDate))
        const newEndDate = new Date(formatToISODate(endDate))
        const searchableStartDate = new Date(searchableRange.firstDateAt)
        const searchableEndDate = new Date(searchableRange.lastDateAt)

        return (
            isDateWithinRange(newStartDate, searchableStartDate, searchableEndDate) &&
            isDateWithinRange(newEndDate, searchableStartDate, searchableEndDate)
        )
    }

    // 시작일시는 종료일시보다 이전이여야 함
    const isValidSelectRange = () => {
        const newStartDate = new Date(formatToISODate(startDate))
        const newEndDate = new Date(formatToISODate(endDate))

        return isStartDateBeforeEndDate(newStartDate, newEndDate)
    }

    return {
        isValidDate,
        isAllSelected,
        isWithSearchableRange,
        isValidSelectRange,
    }
}

// 검색어 유효성 검증 (특수문자, 영어, 자음/모음만 체크)
export const validateSearchTerm = (searchTerm: string) => {
    if (!trimValue(searchTerm)) {
        return {
            isValid: false,
            message: '검색어를 입력해주세요',
        }
    }

    // 특수문자, 영어, 자음/모음만 있는지 체크
    const invalidChars = /[^가-힣0-9\s]|[ㄱ-ㅎㅏ-ㅣ]/

    if (invalidChars.test(searchTerm)) {
        return {
            isValid: false,
            message: '완성된 한글이나 숫자만 입력 가능합니다',
        }
    }

    return {
        isValid: true,
        value: searchTerm,
    }
}

// 운행거리 유효성 검증 함수
export const validateDrivingDistance = (value: string): boolean => {
    if (!value) return false

    // 숫자만 허용하는 정규식으로 변경
    if (!/^[0-9]+$/.test(value)) return false

    const numValue = Number(value)
    if (numValue > 999999) return false

    if (numValue < 0) return false

    return true
}

// 운행거리 입력 제한 함수
export const handleDrivingDistanceKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // 숫자 키만 허용하도록 변경
    if (!/^[0-9]$/.test(event.key)) {
        event.preventDefault()
        return
    }

    const currentValue = event.currentTarget.value
    const newValue = currentValue + event.key

    if (Number(newValue) > 999999) {
        event.preventDefault()
    }
}

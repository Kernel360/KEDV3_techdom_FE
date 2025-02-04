export const MODAL_MESSAGES = {
    AUTH: {
        INVALID_CREDENTIALS: '아이디 또는 비밀번호를 다시 확인해주세요.',
        SERVER_ERROR: '서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
    },
    VEHICLE: {
        NOT_FOUND: '등록되지 않은 차량번호입니다.',
        REQUIRED: '차량번호를 입력해주세요.',
        INVALID_CHARACTERS: '차량번호는 숫자/한글만 입력 가능합니다.',
        INVALID_FORMAT: '올바른 차량번호 형식이 아닙니다.\n(예시 : 12가 1234 또는 123가 1234)',
        DELETE_CONFIRM: '삭제된 차량 정보는 복구할 수 없습니다. 정말 삭제하시겠습니까?',
    },
} as const

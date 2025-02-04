import { useModal } from '@/hooks/useModal'

export const useDetailModal = () => {
    const {
        isOpen: isConfirmModalOpen,
        modalMessage: confirmModalMessage,
        closeModal: closeConfirmModal,
        showMessage: showConfirmMessage,
    } = useModal()
    const {
        isOpen: isAlertModalOpen,
        modalMessage: alertModalMessage,
        closeModal: closeAlertModal,
        showMessage: showAlertMessage,
    } = useModal()

    return {
        isConfirmModalOpen,
        confirmModalMessage,
        closeConfirmModal,
        showConfirmMessage,
        isAlertModalOpen,
        alertModalMessage,
        closeAlertModal,
        showAlertMessage,
    }
}

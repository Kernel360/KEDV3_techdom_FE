import Image from 'next/image'

import InspectionStatusModal, { InspectionStatusModalModel } from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof InspectionStatusModal> = {
    title: 'Components/Modal/InspectionStatusModal',
    component: InspectionStatusModal,
    parameters: {
        layout: 'centered',
    },
}

export default meta

type StoryType = StoryObj<typeof InspectionStatusModal>

const mockInspectionData: InspectionStatusModalModel[] = [
    {
        status: 'required' as const,
        iconType: 'bell' as const,
        icon: <Image src='/icons/white-bell-icon.svg' alt='bell' width={24} height={24} />,
        title: '차량 점검 안내',
        children: '123가 4567',
        message: '차량에 대한 점검이 필요합니다.',
    },
    {
        status: 'scheduled' as const,
        iconType: 'alert' as const,
        icon: <Image src='/icons/white-alert-icon.svg' alt='alert' width={24} height={24} />,
        title: '차량 점검 예정',
        children: '456나 7890',
        message: '차량이 점검 예정입니다.',
    },
    {
        status: 'inProgress' as const,
        iconType: 'button' as const,
        icon: <Image src='/icons/white-on-button-icon.svg' alt='button' width={24} height={24} />,
        title: '차량 점검 진행',
        children: '789다 1234',
        message: '차량에 대한 점검이 진행 중입니다.',
    },
    {
        status: 'completed' as const,
        iconType: 'check' as const,
        icon: <Image src='/icons/white-check-icon.svg' alt='check' width={24} height={24} />,
        title: '차량 점검 완료',
        children: '321라 6547',
        message: '차량에 대한 점검이 완료되었습니다.',
    },
]

export const Required: StoryType = {
    args: {
        inspectionStatusData: [mockInspectionData[0]],
        isOpen: true,
    },
}

export const Scheduled: StoryType = {
    args: {
        inspectionStatusData: [mockInspectionData[1]],
        isOpen: true,
    },
}

export const InProgress: StoryType = {
    args: {
        inspectionStatusData: [mockInspectionData[2]],
        isOpen: true,
    },
}

export const Completed: StoryType = {
    args: {
        inspectionStatusData: [mockInspectionData[3]],
        isOpen: true,
    },
}

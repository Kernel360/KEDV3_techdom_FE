import { BADGE_SHAPE, OPERATION_STATUS, VEHICLE_ROLE } from './constants'

import Badge from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ['className'],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        shape: {
            control: 'radio',
            options: Object.values(BADGE_SHAPE),
            defaultValue: BADGE_SHAPE.RECTANGLE,
            description: '뱃지 모서리 스타일 (rectangle: 각진 모서리, circle: 동그라미)',
            table: {
                type: { summary: 'ShapeType' },
            },
        },
        variant: {
            control: 'select',
            options: [...Object.values(OPERATION_STATUS), ...Object.values(VEHICLE_ROLE)],
            defaultValue: OPERATION_STATUS.IN_OPERATION,
            description: '뱃지 상태 (운행상태: 운행중/미운행/미관제, 차량용도: 일반업무/출퇴근)',
            table: {
                type: { summary: 'OperationStatus | VehicleRole' },
            },
        },
    },
}

export default meta

type StoryType = StoryObj<typeof Badge>

export const RectangleInOperation: StoryType = {
    args: {
        shape: 'rectangle',
        variant: OPERATION_STATUS.IN_OPERATION,
    },
}

export const RectangleNotDriven: StoryType = {
    args: {
        shape: BADGE_SHAPE.RECTANGLE,
        variant: OPERATION_STATUS.NOT_DRIVEN,
    },
}

export const RectangleNotRegistered: StoryType = {
    args: {
        shape: BADGE_SHAPE.RECTANGLE,
        variant: OPERATION_STATUS.NOT_REGISTERED,
    },
}

export const CircleGeneral: StoryType = {
    args: {
        shape: BADGE_SHAPE.CIRCLE,
        variant: VEHICLE_ROLE.GENERAL,
    },
}

export const CircleCommute: StoryType = {
    args: {
        shape: BADGE_SHAPE.CIRCLE,
        variant: VEHICLE_ROLE.COMMUTE,
    },
}

export const CircleOperating: StoryType = {
    args: {
        shape: BADGE_SHAPE.CIRCLE,
        variant: OPERATION_STATUS.IN_OPERATION,
    },
}

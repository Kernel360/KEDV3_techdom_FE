import { create } from 'zustand'

import { User } from '@/types/auth'

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    isAuthLoading: boolean
    authError: string | null

    setAuthLoading: (isAuthLoading: boolean) => void
    setAuthError: (authError: string) => void
    login: ({ email, nickname, companyName, departmentName }: User) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isAuthLoading: false,
    authError: null,

    setAuthLoading: (isAuthLoading: boolean) => set({ isAuthLoading }),
    setAuthError: (authError: string) => set({ authError }),

    login: ({ email, nickname, companyName, departmentName }: User) =>
        set({
            user: { email, nickname, companyName, departmentName },
            isAuthenticated: true,
            isAuthLoading: false,
            authError: null,
        }),
    logout: () =>
        set({
            user: null,
            isAuthenticated: false,
            isAuthLoading: false,
            authError: null,
        }),
}))

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        login: () => {
          set(() => ({ isAuthenticated: true }))
        },
        logout: () => {
          set(() => ({ isAuthenticated: false }))
        }
      }),
      {
        name: 'authStore'
      }
    )
  )
)

export default useAuthStore

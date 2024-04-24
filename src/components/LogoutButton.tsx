import useAuthStore from '../store/useAuthStore'

const LogoutButton: React.FunctionComponent = () => {
  const { logout } = useAuthStore()

  return (
    <button
      onClick={() => {
        logout()
      }}
    >
      Logout
    </button>
  )
}

export default LogoutButton

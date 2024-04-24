import useAuthStore from '../store/useAuthStore'

const LoginButton: React.FunctionComponent = () => {
  const { login } = useAuthStore()

  return (
    <button
      onClick={() => {
        login()
      }}
    >
      Login
    </button>
  )
}

export default LoginButton

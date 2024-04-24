import { type ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'

interface PrivateRouteProps {
  children: ReactElement
}

export const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  children
}) => {
  const { isAuthenticated } = useAuthStore()

  return isAuthenticated ? children : <Navigate to='/' />
}

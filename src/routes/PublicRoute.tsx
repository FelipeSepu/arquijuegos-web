import { type ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'

interface PublicRouteProps {
  children: ReactElement
}

export const PublicRoute: React.FunctionComponent<PublicRouteProps> = ({
  children
}) => {
  const { isAuthenticated } = useAuthStore()

  return isAuthenticated ? <Navigate to='/dashboard' /> : children
}

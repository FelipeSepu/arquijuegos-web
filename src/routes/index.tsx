import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import Home from '../views/Home'
import Dashboard from '../views/Dashboard'

const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

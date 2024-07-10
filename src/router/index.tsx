import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import LandingPage from '@/pages/LandingPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: 'about', element: <h1>About</h1> }
    ]
  }
]
export default routes

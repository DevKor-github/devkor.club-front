import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import LandingPage from '@/pages/LandingPage'
import RecruitingPage from '@/pages/RecruitingPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/recruit', element: <RecruitingPage /> }
    ]
  }
]
export default routes

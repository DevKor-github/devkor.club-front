import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import ApplyPage from '@/pages/apply'
import Application from '@/pages/apply/Application'
import ApplyResultPage from '@/pages/apply/Result'
import LandingPage from '@/pages/LandingPage'
import RecruitingPage from '@/pages/RecruitingPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/recruit', element: <RecruitingPage /> },
      {
        path: '/apply',
        element: <ApplyPage />
      },
      { path: '/apply/application/:track', element: <Application /> },
      { path: '/apply/result', element: <ApplyResultPage /> }
    ]
  }
]
export default routes

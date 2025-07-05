import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import ApplyPage from '@/pages/apply'
import Application from '@/pages/apply/Application'
import ApplyResultPage from '@/pages/apply/Result'
import BlogMainPage from '@/pages/blog/main'
import LandingPage from '@/pages/LandingPage'
import RecruitingPageV2 from '@/pages/RecruitingPageV2'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/recruit', element: <RecruitingPageV2 /> },
      {
        path: '/apply',
        element: <ApplyPage />
      },
      { path: '/apply/application/:track', element: <Application /> },
      { path: '/apply/result', element: <ApplyResultPage /> },
      { path: '/blog', element: <BlogMainPage /> }
    ]
  }
]
export default routes

import { RouteObject } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <h1>Home</h1> },
      { path: 'about', element: <h1>About</h1> }
    ]
  }
]
export default routes

import { css } from '@styled-stytem/css'
import { Outlet } from 'react-router-dom'

import Header from '@/components/Header'
const MainLayout = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', w: 'full', minH: 'screen' })}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout

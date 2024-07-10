import { css } from '@styled-stytem/css'
import { Outlet } from 'react-router-dom'

import Header from '@/components/Header'
const MainLayout = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', w: 'full', h: 'screen' })}>
      <Header />
      <main className={css({ flex: 1, overflowY: 'auto' })}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

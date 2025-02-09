import { init } from '@amplitude/analytics-browser'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'

function App() {
  init(import.meta.env.VITE_API_AMPLITUDE_API_KEY)
    .promise.then(() => {
      console.log('[[[[[Amplitude Initiated]]]]]')
    })
    .catch(error => {
      console.log('[[[[[Amplitude Init Error]]]]]', error)
    })
  const route = useRoutes(routes)
  return route
}

export default App

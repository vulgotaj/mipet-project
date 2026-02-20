import { createBrowserRouter } from 'react-router'

import { Home } from './pages/home';
import { Layout } from './components/layout';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/> 
      },
      {
        path: '*',
        element: <Home/>
      }
    ]
  }
])

export { router }
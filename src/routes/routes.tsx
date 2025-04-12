import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Layout from '../pages/Layout/Layout.tsx'
import Markise from '../pages/Markise/Markise.tsx'

interface Paths {
  HOME: string
  MARKISE: string
}

export const paths: Paths = {
  HOME: '/',
  MARKISE: 'markise',
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      { element: <Markise />, path: paths.MARKISE },
    ],
  },
]

export const router = createBrowserRouter(routes)

import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Layout from '../pages/Layout/Layout.tsx'
import Markise from '../pages/Markise/Markise'
import MarkiseAbout from '../pages/Markise/MarkiseAbout'
import MarkiseEntstehung from '../pages/Markise/MarkiseEntstehung'
import MarkiseHistorisch from '../pages/Markise/MarkiseHistorisch'
import MarkiseUmsetzung from '../pages/Markise/MarkiseUmsetzung'

interface Paths {
  HOME: string
  MARKISE: string
  ENTSTEHUNG: string
  UMSETZUNG: string
  HISTORISCH: string
  ABOUT: string
}

export const paths: Paths = {
  HOME: '/',
  MARKISE: 'markiseiii',
  ENTSTEHUNG: `entstehung`,
  UMSETZUNG: `umsetzung`,
  HISTORISCH: `vergangenheit`,
  ABOUT: `about-iii`,
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
      {
        path: paths.MARKISE,
        element: <Markise />,
        children: [
          { path: paths.ENTSTEHUNG, element: <MarkiseEntstehung /> },
          { path: paths.UMSETZUNG, element: <MarkiseUmsetzung /> },
          { path: paths.HISTORISCH, element: <MarkiseHistorisch /> },
          { path: paths.ABOUT, element: <MarkiseAbout /> },
          { index: true, element: <Navigate to={paths.ENTSTEHUNG} replace /> }, // Redirect für /markise
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)

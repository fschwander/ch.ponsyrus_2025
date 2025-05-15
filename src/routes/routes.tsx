import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Layout from '../pages/Layout/Layout.tsx'
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
  ENTSTEHUNG: `entstehungsgeschichte`,
  UMSETZUNG: `umsetzung`,
  HISTORISCH: `historisches-aussersihl`,
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
        element: <Navigate to={`${paths.ENTSTEHUNG}`} replace={true} />,
      },
      {
        path: `${paths.MARKISE}/${paths.ENTSTEHUNG}`,
        element: <MarkiseEntstehung />,
      },
      {
        path: `${paths.MARKISE}/${paths.UMSETZUNG}`,
        element: <MarkiseUmsetzung />,
      },
      {
        path: `${paths.MARKISE}/${paths.HISTORISCH}`,
        element: <MarkiseHistorisch />,
      },
      {
        path: `${paths.MARKISE}/${paths.ABOUT}`,
        element: <MarkiseAbout />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)

import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Layout from '../pages/Layout/Layout.tsx'
import Markise from '../pages/Markise/Markise'
import MarkiseAbout from '../pages/Markise/MarkiseAbout'
import MarkiseHistorisches from '../pages/Markise/MarkiseHistorisches'
import MarkiseKonzept from '../pages/Markise/MarkiseKonzept'
import MarkiseMakingOf from '../pages/Markise/MarkiseMakingOf'

interface Paths {
  HOME: string
  MARKISE: string
  KONZEPT: string
  MAKING_OF: string
  HISTORISCHES: string
  ABOUT: string
}

export const paths: Paths = {
  HOME: '/',
  MARKISE: 'markiseiii',
  KONZEPT: `konzept`,
  MAKING_OF: `making-of`,
  HISTORISCHES: `historisches`,
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
          { path: paths.KONZEPT, element: <MarkiseKonzept /> },
          { path: paths.MAKING_OF, element: <MarkiseMakingOf /> },
          { path: paths.HISTORISCHES, element: <MarkiseHistorisches /> },
          { path: paths.ABOUT, element: <MarkiseAbout /> },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import useSize from '@react-hook/size'
import { paths } from '../../routes/routes.tsx'
import './Layout.scss'

const Layout = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  const [, containerHeight] = useSize(rootRef)
  const [scrollY, setScrollY] = useState(0)

  const progress = useMemo(() => {
    const prog = scrollY / (containerHeight - window.innerHeight)
    return prog < 0 ? 0 : prog > 1 ? 1 : prog
  }, [containerHeight, scrollY])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    const bodyEl = document.getElementsByTagName('html')
    const spread = 20
    const pos = 80
    const bgColor = `radial-gradient(circle at 50%, transparent ${pos - spread * (1 - progress)}%, var(--clr-secondary) ${pos}%)`
    if (bodyEl[0]) {
      bodyEl[0].style.setProperty('--t-body-bg', bgColor)
    }
  }, [progress])

  return (
    <div className={'layout'} ref={rootRef}>
      <nav className={'nav'}>
        <Link to={paths.HOME}>home</Link>
        <Link to={paths.MARKISE}>markise iii</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout

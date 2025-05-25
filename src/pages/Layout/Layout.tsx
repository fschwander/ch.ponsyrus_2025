import classNames from 'classnames'
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import useSize from '@react-hook/size'
import { paths } from '../../routes/routes.tsx'
import './Layout.scss'

const Layout = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  // const [menuIsClosed, setMenuIsClosed] = useState(true)
  //
  // const toggleMenu = () => {
  //   setMenuIsClosed((prevState) => !prevState)
  // }

  const location = useLocation()

  // @ts-expect-error bla`
  const [containerWidth, containerHeight] = useSize(rootRef)
  const [scrollY, setScrollY] = useState(0)

  const progress = useMemo(() => {
    const prog = scrollY / (containerHeight - window.innerHeight)
    return prog < 0 ? 0 : prog > 1 ? 1 : prog
  }, [containerHeight, scrollY])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const htmlEl = document.getElementsByTagName('html')
    const spread = 20
    const pos = 80
    const bgColor = `radial-gradient(circle at 50% 60%, transparent ${pos - spread * progress}%, var(--clr-primary-light) ${pos}%)`
    if (htmlEl[0]) {
      htmlEl[0].style.setProperty('--bg-color', bgColor)
    }
  }, [progress])

  useEffect(() => {
    setScrollY(0)
    window.scrollTo({ top: 0 })
  }, [location])

  return (
    <div
      className={'layout'}
      ref={rootRef}
      style={
        {
          '--progress': progress,
          '--container-width': `${containerWidth}px`,
        } as CSSProperties
      }
    >
      <nav
        className={classNames('nav', {
          'nav--hide': location.pathname === paths.HOME,
        })}
      >
        <Link className={'nav__link'} to={paths.HOME}>
          ponsyrus
        </Link>
        <div className={'nav__group'}>
          <Link
            className={classNames('nav__link', {
              'nav__link--active': location.pathname.endsWith(paths.MARKISE),
            })}
            to={paths.MARKISE}
          >
            markise iii
          </Link>
          <Link
            className={classNames('nav__sublink', {
              'nav__sublink--show': !location.pathname.endsWith(paths.MARKISE),
              'nav__sublink--active': location.pathname.endsWith(
                paths.ENTSTEHUNG,
              ),
            })}
            to={`${paths.MARKISE}/${paths.ENTSTEHUNG}`}
          >
            entstehung
          </Link>
          <Link
            className={classNames('nav__sublink', {
              'nav__sublink--show': !location.pathname.endsWith(paths.MARKISE),
              'nav__sublink--active': location.pathname.endsWith(
                paths.UMSETZUNG,
              ),
            })}
            to={`${paths.MARKISE}/${paths.UMSETZUNG}`}
          >
            umsetzung
          </Link>
          <Link
            className={classNames('nav__sublink', {
              'nav__sublink--show': !location.pathname.endsWith(paths.MARKISE),
              'nav__sublink--active': location.pathname.endsWith(
                paths.HISTORISCH,
              ),
            })}
            to={`${paths.MARKISE}/${paths.HISTORISCH}`}
          >
            vergangenheit
          </Link>
          <Link
            className={classNames('nav__sublink', {
              'nav__sublink--show': !location.pathname.endsWith(paths.MARKISE),
              'nav__sublink--active': location.pathname.endsWith(paths.ABOUT),
            })}
            to={`${paths.MARKISE}/${paths.ABOUT}`}
          >
            über iii
          </Link>
        </div>
        {/*<div className={'nav__menu'}>*/}
        {/*  <HamburgerMenu isClosed={menuIsClosed} toggleClosed={toggleMenu} />*/}
        {/*</div>*/}
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout

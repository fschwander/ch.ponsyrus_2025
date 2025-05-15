import classNames from 'classnames'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import useSize from '@react-hook/size'
import { paths } from '../../routes/routes.tsx'
import './Layout.scss'

const Layout = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  const location = useLocation()

  // @ts-expect-error bla`
  const [, containerHeight] = useSize(rootRef)
  const [scrollY, setScrollY] = useState(0)

  const progress = useMemo(() => {
    const prog = scrollY / (containerHeight - window.innerHeight)
    return prog < 0 ? 0 : prog > 1 ? 1 : prog
  }, [containerHeight, scrollY])

  const handleLinkClick = () => {
    setScrollY(0)
    window.scrollTo({ top: 0 })
  }

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

  return (
    <div className={'layout'} ref={rootRef}>
      <nav
        className={classNames('nav', {
          'nav--hide': location.pathname === paths.HOME,
        })}
      >
        <Link
          className={classNames('nav__link', {
            'nav__link--active': location.pathname === paths.HOME,
          })}
          to={paths.HOME}
          onClick={handleLinkClick}
        >
          ponsyrus
        </Link>
        <div className={'nav__group'}>
          <Link
            className={classNames('nav__link', {
              'nav__link--active': location.pathname === paths.MARKISE,
            })}
            to={paths.MARKISE}
            onClick={handleLinkClick}
          >
            markise iii
          </Link>
          <Link
            className={classNames('nav__sublink', {
              'nav__sublink--active': location.pathname.endsWith(
                paths.ENTSTEHUNG,
              ),
            })}
            to={`${paths.MARKISE}/${paths.ENTSTEHUNG}`}
            onClick={handleLinkClick}
          >
            entstehung
          </Link>
          <Link
            className={classNames('nav__sublink', {
              'nav__sublink--active': location.pathname.endsWith(
                paths.UMSETZUNG,
              ),
            })}
            to={`${paths.MARKISE}/${paths.UMSETZUNG}`}
            onClick={handleLinkClick}
          >
            umsetzung
          </Link>
          <Link
            className={classNames('nav__sublink', {
              'nav__sublink--active': location.pathname.endsWith(
                paths.HISTORISCH,
              ),
            })}
            to={`${paths.MARKISE}/${paths.HISTORISCH}`}
            onClick={handleLinkClick}
          >
            vergangenheit
          </Link>
          <Link
            className={classNames('nav__sublink', {
              'nav__sublink--active': location.pathname.endsWith(paths.ABOUT),
            })}
            to={`${paths.MARKISE}/${paths.ABOUT}`}
            onClick={handleLinkClick}
          >
            über iii
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout

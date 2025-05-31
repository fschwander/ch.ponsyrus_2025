import classNames from 'classnames'
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import useSize from '@react-hook/size'
import { paths } from '../../routes/routes.tsx'
import './Layout.scss'

const Layout = () => {
  const rootRef = useRef<HTMLDivElement>(null)

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
        <div className={'nav__main'}>
          <Link className={'nav__link'} to={paths.HOME}>
            ponsyrus
          </Link>
          <Link
            className={classNames('nav__link', {
              'nav__link--active': location.pathname.includes(paths.MARKISE),
              'nav__link--highlighted': location.pathname.endsWith(
                paths.MARKISE,
              ),
            })}
            to={paths.MARKISE}
          >
            markise iii
          </Link>
        </div>

        <div
          className={classNames('nav__subgroup', {
            'nav__subgroup--show': !location.pathname.endsWith(paths.MARKISE),
          })}
        >
          <Link
            className={classNames('nav__subgroup-link', {
              'nav__subgroup-link--active': location.pathname.includes(
                paths.ENTSTEHUNG,
              ),
              'nav__subgroup-link--highlighted': location.pathname.endsWith(
                paths.ENTSTEHUNG,
              ),
            })}
            to={`${paths.MARKISE}/${paths.ENTSTEHUNG}`}
          >
            entstehung
          </Link>
          <Link
            className={classNames('nav__subgroup-link', {
              'nav__subgroup-link--active': location.pathname.endsWith(
                paths.UMSETZUNG,
              ),
              'nav__subgroup-link--highlighted': location.pathname.endsWith(
                paths.UMSETZUNG,
              ),
            })}
            to={`${paths.MARKISE}/${paths.UMSETZUNG}`}
          >
            umsetzung
          </Link>
          <Link
            className={classNames('nav__subgroup-link', {
              'nav__subgroup-link--active': location.pathname.endsWith(
                paths.HISTORISCH,
              ),
              'nav__subgroup-link--highlighted': location.pathname.endsWith(
                paths.HISTORISCH,
              ),
            })}
            to={`${paths.MARKISE}/${paths.HISTORISCH}`}
          >
            vergangenheit
          </Link>
          <Link
            className={classNames('nav__subgroup-link', {
              'nav__subgroup-link--active': location.pathname.endsWith(
                paths.ABOUT,
              ),
              'nav__subgroup-link--highlighted': location.pathname.endsWith(
                paths.ABOUT,
              ),
            })}
            to={`${paths.MARKISE}/${paths.ABOUT}`}
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

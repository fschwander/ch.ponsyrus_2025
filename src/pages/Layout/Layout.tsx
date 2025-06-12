import classNames from 'classnames'
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import useSize from '@react-hook/size'
import { useAppMeasurements } from '../../hooks/useAppMeasurements'
import { paths } from '../../routes/routes.tsx'
import './Layout.scss'

const Layout = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const { isMobile } = useAppMeasurements()

  const bgGradient = useMemo(
    () =>
      isMobile
        ? { type: 'ellipse', width: 200, height: 68, pos: 70, spread: 10 }
        : location.pathname === paths.HOME
          ? { type: 'circle', width: 50, height: 50, pos: 60, spread: 5 }
          : location.pathname.endsWith(paths.MARKISE)
            ? { type: 'circle', width: 60, height: 60, pos: 70, spread: 5 }
            : { type: 'ellipse', width: 150, height: 120, pos: 80, spread: 5 },
    [isMobile, location.pathname],
  )

  // @ts-expect-error bla`
  const [containerWidth, containerHeight] = useSize(rootRef)
  const [scrollY, setScrollY] = useState(0)

  const progress = useMemo(() => {
    const prog = scrollY / (containerHeight - window.innerHeight)
    return prog < 0 || isNaN(prog) ? 0 : prog > 1 ? 1 : prog
  }, [containerHeight, scrollY])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const htmlEl = document.getElementsByTagName('html')

    const bgColor = `radial-gradient(${isMobile ? bgGradient.type + ' ' + bgGradient.width + '% ' + bgGradient.height + '%' : bgGradient.type} at 50% 60%, transparent ${bgGradient.pos - bgGradient.spread * progress}%, var(--clr-primary-light) ${bgGradient.pos}%)`

    if (htmlEl[0]) {
      htmlEl[0].style.setProperty('--bg-color', bgColor)
    }
  }, [bgGradient, isMobile, progress])

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
        style={{
          background: `radial-gradient(ellipse 130% 50% at 50% 100%, transparent ${40 - 20 * progress}%, var(--clr-primary-light) 40%`,
        }}
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
                paths.KONZEPT,
              ),
              'nav__subgroup-link--highlighted': location.pathname.endsWith(
                paths.KONZEPT,
              ),
            })}
            to={`${paths.MARKISE}/${paths.KONZEPT}`}
          >
            konzept
          </Link>
          <Link
            className={classNames('nav__subgroup-link', {
              'nav__subgroup-link--active': location.pathname.endsWith(
                paths.MAKING_OF,
              ),
              'nav__subgroup-link--highlighted': location.pathname.endsWith(
                paths.MAKING_OF,
              ),
            })}
            to={`${paths.MARKISE}/${paths.MAKING_OF}`}
          >
            making of
          </Link>
          <Link
            className={classNames('nav__subgroup-link', {
              'nav__subgroup-link--active': location.pathname.endsWith(
                paths.HISTORISCHES,
              ),
              'nav__subgroup-link--highlighted': location.pathname.endsWith(
                paths.HISTORISCHES,
              ),
            })}
            to={`${paths.MARKISE}/${paths.HISTORISCHES}`}
          >
            historisches
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
            about iii
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout

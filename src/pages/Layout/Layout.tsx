import classNames from 'classnames'
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import useSize from '@react-hook/size'
import { useAppMeasurements } from '../../hooks/useAppMeasurements'
import { paths } from '../../routes/routes.tsx'
import './Layout.scss'

const Layout = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const { isMobile } = useAppMeasurements()

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

    const sizes = isMobile
      ? { type: 'ellipse', width: 200, height: 62, pos: 70, spread: 10 }
      : { type: 'circle', width: 100, height: 100, pos: 75, spread: 5 }
    const bgColor = `radial-gradient(${isMobile ? sizes.type + ' ' + sizes.width + '% ' + sizes.height + '%' : sizes.type}  at 50% 60%, transparent ${sizes.pos - sizes.spread * progress}%, var(--clr-primary-light) ${sizes.pos}%)`
    // const bgColor = `radial-gradient(farthest-side at 50% 60%, transparent ${pos - spread * progress}%, var(--clr-primary-light) ${pos}%)`

    if (htmlEl[0]) {
      htmlEl[0].style.setProperty('--bg-color', bgColor)
    }
  }, [isMobile, progress])

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

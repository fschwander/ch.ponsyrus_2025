import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppMeasurements } from '../../hooks/useAppMeasurements'
import { paths } from '../../routes/routes'
import ImgHouseDesktop from '/src/assets/images/houseDesktop.svg?react'
import ImgHouseMobile from '/src/assets/images/houseMobile.svg?react'
import ImgOrange from '/src/assets/images/orange1.svg?react'
import ImgOrangeWithLeave from '/src/assets/images/orange2.svg?react'
import ImgTwig from '/src/assets/images/twig2.svg?react'
import './Home.scss'

const Home = () => {
  const houseRef = useRef<SVGSVGElement>(null)
  const navigate = useNavigate()

  const { isMobile } = useAppMeasurements()

  useEffect(() => {
    const updateSvgLinesLengths = () => {
      // @ts-expect-error: TODO: Check type
      const arrowLine: SVGPathElement =
        houseRef.current?.getElementsByClassName('arrow-line')[0]
      const arrowLineLength = arrowLine?.getTotalLength().toString()
      arrowLine.style.setProperty('--arrow-line-length', arrowLineLength)

      // @ts-expect-error: TODO: Check type
      const arrowPoints: HTMLCollectionOf<SVGPathElement> =
        houseRef.current?.getElementsByClassName('arrow-point')

      Array.from(arrowPoints).forEach((pointEl) => {
        const arrowPointLineLength = arrowLine?.getTotalLength().toString()
        pointEl.style.setProperty('--arrow-line-length', arrowPointLineLength)
      })
    }
    updateSvgLinesLengths()

    document.addEventListener('resize', updateSvgLinesLengths)
    return () => {
      document.removeEventListener('resize', updateSvgLinesLengths)
    }
  }, [isMobile])

  useEffect(() => {
    const handleMarkiseClick = () => navigate(paths.MARKISE)
    const button = houseRef.current?.getElementsByClassName('pointer')[0]
    button?.addEventListener('click', handleMarkiseClick)

    return () => {
      button?.removeEventListener('click', handleMarkiseClick)
    }
  }, [navigate, isMobile])

  console.log(isMobile)

  return (
    <div className={'home'}>
      <ImgTwig className={'img-twig'} />
      <ImgOrange className={'img-orange'} />
      {!isMobile && <ImgOrangeWithLeave className={'img-orange-with-leave'} />}

      {isMobile ? (
        <ImgHouseMobile ref={houseRef} className={'img-house'} />
      ) : (
        <ImgHouseDesktop ref={houseRef} className={'img-house'} />
      )}

      <div className={'home__content'}>
        <h1 className={'home__title'}>Ponsyrus Genossenschaft</h1>

        <p>
          Anwandstrasse 9, 8004 Zürich <br />
          <a href='mailto:genossenschaft@ponsyrus.ch'>
            genossenschaft@ponsyrus.ch
          </a>
        </p>

        <p>Kleingenossenschaftliches Wohnen seit 1984.</p>
      </div>
    </div>
  )
}

export default Home

import { useEffect, useState } from 'react'

interface UseAppMeasurements {
  isMobile: boolean
}

export const useAppMeasurements = (): UseAppMeasurements => {
  const [measurements, setMeasurements] = useState({
    isMobile: true,
  })

  useEffect(() => {
    const updateMeasurements = () => {
      setMeasurements({
        isMobile: window.innerWidth <= 720,
      })
    }
    updateMeasurements()

    window.addEventListener('resize', updateMeasurements)

    return window.removeEventListener('resize', updateMeasurements)
  }, [])

  return measurements
}

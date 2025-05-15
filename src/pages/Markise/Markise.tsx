import { Outlet } from 'react-router-dom'
import './Markise.scss'

const Markise = () => {
  return (
    <div className={'markise'}>
      <Outlet />
    </div>
  )
}

export default Markise

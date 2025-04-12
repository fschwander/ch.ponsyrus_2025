import { Link, Outlet } from 'react-router-dom'
import { paths } from '../../routes/routes.tsx'
import './Layout.scss'

const Layout = () => {
  return (
    <div className={'layout'}>
      <nav>
        <Link to={paths.HOME}>Home</Link>
        <Link to={paths.MARKISE}>Markise</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout

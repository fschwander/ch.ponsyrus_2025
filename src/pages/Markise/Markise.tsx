import classNames from 'classnames'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { paths } from '../../routes/routes'
import './Markise.scss'

const Markise = () => {
  const location = useLocation()

  return (
    <div className='markise'>
      <div
        className={classNames('markise__nav', {
          'markise__nav--hide': !location.pathname.endsWith(paths.MARKISE),
        })}
      >
        <div className='markise__nav-header'>
          <h1>markise – kunst am bau</h1>
          <p>
            Erneuerung der Markise an der Anwandstrasse 9 in Zürich von iii
            zusammen mit der Genossenschaft Ponsyrus und Les Complices*/La
            Capsula.
          </p>
        </div>
        <div className='markise__nav-group'>
          <div className='markise__nav-group-link'>
            <Link to={paths.KONZEPT}>konzept</Link>
          </div>
          <div className='markise__nav-group-link'>
            <Link to={paths.MAKING_OF}>making of</Link>
          </div>
          <div className='markise__nav-group-link'>
            <Link to={paths.HISTORISCHES}>historisches</Link>
          </div>
          <div className='markise__nav-group-link'>
            <Link to={paths.ABOUT}>about iii</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Markise

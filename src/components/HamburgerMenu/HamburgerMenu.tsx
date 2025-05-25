import classNames from 'classnames'
import './HamburgerMenu.scss'

const HamburgerMenu = ({ isClosed = false, toggleClosed = () => {} }) => {
  return (
    <div
      className={classNames('hamburger-menu', {
        'hamburger-menu--closed': isClosed,
      })}
      onClick={toggleClosed}
    >
      <div className={'hamburger-menu__bar hamburger-menu__bar-top'} />
      <div className={'hamburger-menu__bar hamburger-menu__bar-middle'} />
      <div className={'hamburger-menu__bar hamburger-menu__bar-bottom'} />
    </div>
  )
}

export default HamburgerMenu

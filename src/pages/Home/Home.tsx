import House from '/src/assets/images/house.svg?react'
import './Home.scss'

const Home = () => {
  return (
    <div className={'home'}>
      <House className={'home__img-house'} />

      <h1>Ponsyrus Genossenschaft</h1>
      <p>
        Anwandstrasse 9, 8004 Zürich <br />
        <a href='mailto:genossenschaft@ponsyrus.ch'>
          genossenschaft@ponsyrus.ch
        </a>
      </p>
      <p>Kleingenossenschaftliches Wohnen seit 1984</p>
    </div>
  )
}

export default Home

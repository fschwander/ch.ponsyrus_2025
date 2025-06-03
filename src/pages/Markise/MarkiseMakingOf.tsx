import Figure from '../../components/Figure/Figure'

const MarkiseMakingOf = () => {
  return (
    <div className='markise-making-of'>
      <h1>making of</h1>
      <p>auswahl von entwürfen und skizzen.</p>
      <Figure src='versuch-1.webp' caption='beispiel 1 von hermes' />
      <Figure src='versuch-2.webp' caption='beispiel 2 von hermes' />
      <Figure src='versuch-3.webp' caption='beispiel 3 von hermes' />
      <Figure src='socke.webp' caption='pajaro punk socken von maja lascano' />
      <Figure
        src='linie-1.webp'
        caption='entwurf linien von AKW, inspiriert aus dem buch paradiesvögel und kolibris mit wasserfarbe'
      />
      <Figure
        src='linie-2.webp'
        caption='linien AKW, durchgepaust mit kugelschreiber'
      />
      <Figure
        src='skizze.webp'
        caption='skizze erweiterung und neuberechnung der druckvorlage'
      />
    </div>
  )
}

export default MarkiseMakingOf

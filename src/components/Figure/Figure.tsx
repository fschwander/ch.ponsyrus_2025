import './Figure.scss'

interface FigureProps {
  src: string
  caption?: string
}

const Figure = ({ src, caption }: FigureProps) => {
  const url = new URL(`/src/assets/images/figures/${src}`, import.meta.url).href

  return (
    <figure className={'figure'}>
      <img className={'figure__image'} src={url} alt={''} loading={'lazy'} />
      {caption && (
        <figcaption className={'figure__caption'}>{caption}</figcaption>
      )}
    </figure>
  )
}

export default Figure

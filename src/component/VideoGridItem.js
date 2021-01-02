import { Link } from 'react-router-dom'

import Style from './scss/VideoGridItem.module.scss'

function VideoGridItem({ id, src, title }) {
  return (
    <Link to={{ pathname: 'watch', search: `?v=${id}` }} className={Style.item}>
      <div>
        <img src={src} alt={id} />
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default VideoGridItem

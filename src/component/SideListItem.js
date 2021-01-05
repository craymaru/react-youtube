import { Link } from 'react-router-dom'
import Style from './scss/SideListItem.module.scss'

const SideListItem = ({id, src, title}) => {
  // console.log("nankore", id)
  return (
    <Link className={Style.item} to={{ pathname: 'watch', search: `?v=${id}` }}>
      <img src={src} alt={title} />
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default SideListItem

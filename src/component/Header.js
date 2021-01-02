import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Style from './scss/Header.module.scss'

const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.item}>
        <Link to="/">MeowTube</Link>
      </div>
      <div className={Style.item}>
        <form action="">
          <input type="text" placeholder="Search"/>
          <button type="submit">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header

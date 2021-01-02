import Header from "./Header";
import Style from './scss/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={Style.wrapper}>
      <Header/>
      <main className={Style.main}>
        { children }
      </main>
    </div>
  )
}

export default Layout

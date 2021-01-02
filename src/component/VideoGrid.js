import Style from './scss/VideoGrid.module.scss'

const VideoGrid = ({ children }) => {
  return (
    <div className={Style.container}>
      { children }
    </div>
  )
}

export default VideoGrid

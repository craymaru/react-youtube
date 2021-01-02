import Style from './scss/VideoGrid.module.scss'

const VideoGrid = ({ children }) => {
  return (
    <div clasName={Style.container}>
      { children }
    </div>
  )
}

export default VideoGrid

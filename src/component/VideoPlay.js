import YouTube from 'react-youtube'

import Style from './scss/VideoPlay.module.scss'

const VideoPlay = ({ id }) => {
  return (
    <div className={Style.wrap}>
      <YouTube videoId={id} className={Style.video}/>
    </div>
  )
}

export default VideoPlay

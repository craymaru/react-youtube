import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Linkify from 'react-linkify'

import { fetchSelectedData } from '../apis/index'
import { Store } from '../store/index'
import VideoPlay from './VideoPlay'

import Style from './scss/VideoDetail.module.scss'

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store)
  const location = useLocation()
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    const res = await fetchSelectedData(id)
    const item = res.data.items.shift()
    setGlobalState({ type: 'SET_SELECTED', payload: { selected: item } })
  }

  useEffect(() => {
    setSelectedVideo()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>No data.</span>
  )
}

export default VideoDetail

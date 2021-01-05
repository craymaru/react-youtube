import { useEffect, useContext } from 'react'

import { Store } from '../store/index'
import { fetchPopularData } from '../apis/index'
import Layout from '../component/Layout'
import VideoGrid from '../component/VideoGrid'
import VideoGridItem from '../component/VideoGridItem'

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((res) => {
      setGlobalState({ type: 'SET_POPULAR', payload: { popular: res.data.items } })
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <VideoGrid>
        {globalState.popular && globalState.popular.map((popular) => {
          const thumbnail = popular.snippet.thumbnails.standard || popular.snippet.thumbnails.default
          return (
            <VideoGridItem
              id={popular.id}
              key={popular.id}
              src={thumbnail.url}
              title={popular.snippet.title} //
            />
          )
          })}
      </VideoGrid>
    </Layout>
  )
}

export default Top

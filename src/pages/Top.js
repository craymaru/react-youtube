import { useEffect, useContext } from 'react'

import { Store } from '../store/index'
import { fetchPopularData } from '../apis/index'
import Layout from '../component/Layout'

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res)
      setGlobalState({ type: 'SET_POPULAR', payload: { populer: res.data.items } })
    })
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Layout>Top page</Layout>
}

export default Top

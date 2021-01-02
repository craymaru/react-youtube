import React, { useEffect } from 'react'
import Layout from '../component/Layout/Layout'
import { fetchPopularData } from '../apis/index'

const Top = () => {
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res)
    })
  }, [])

  return (
    <div>
      <Layout>Top page</Layout>
    </div>
  )
}

export default Top

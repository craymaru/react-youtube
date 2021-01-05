import axios from 'axios'

// Google acount: c*******
const API_KEY = 'AIzaSyCJ2Wus7oUR52pc9TKQom5Djksgf4j9VTE'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
})

const params = {
  part: 'snippet',
  maxResults: 40,
  key: API_KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularData = async () => {
  // 1: path, 2: parameter
  return await youtube.get('videos', {
    params: {
      ...params,
      chart: 'mostPopular',
    },
  })
}

export const fetchSelectedData = async (id) => {
  return await youtube.get('videos', {
    params: {
      ...params,
      id,
    },
  })
}

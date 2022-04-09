import { useEffect, useState } from 'react'

// const APIKEY = process.env.NODE_ENV.VITE_GIPHY_API_KEY
const APIKEY = 'LME4mxGR7rYDxSJtZQAyYCh4C6KB4oI2'

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState('')

  const fetchGifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword.split(' ').join('')}&limit=1` + `&api_key=${APIKEY}`)
      const { data } = await response.json()

      setGifUrl(data[0]?.images?.downsized_medium.url)
    } catch (error) {
      setGifUrl('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284')
    }
  }

  useEffect(() => {
    if (keyword) fetchGifs()
  }, [keyword])

  return gifUrl
}

export default useFetch
import { useEffect, useState } from 'react'

const useFetch = ({ addressTo }) => {
  const [etherscanURL, setEtherscanURL] = useState('')
  const etherscan_api_key = process.env.NODE_ENV.ETHERSCAN_API_KEY

  const fetchEtherscanURL = async () => {
    try {
      const response = await fetch(`https://ropsten.etherscan.io/address/` + addressTo)
      const data = await response
      setEtherscanURL(data.url)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (addressTo) fetchEtherscanURL()
  }, [addressTo])

  return etherscanURL
}


export default useFetch
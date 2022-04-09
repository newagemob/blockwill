import React, { useContext } from 'react'

import { TransactionContext } from '../../context/TransactionContext'

import useFetch from '../../hooks/useFetch'
import dummyData from '../../utils/dummyData'
import { shortenAddress } from '../../utils/shortenAddress'

const gradientColors = [
  '#00c6fb',
  '#005bea',
  '#00f7fb',
  '#f7bb97',
  '#ffd194',
  '#ff5858'
]

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const etherscanURL = useFetch({ addressTo })

  return (
    <div
      className='bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl'
    >
      <div className='flex flex-col items-center w-full mt-3'>
        <div className='display-flex justify-start w-full mb-6 p-2'>
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target='_blank' rel='noreferrer'>
            <p className='text-white text-base'>From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target='_blank' rel='noreferrer'>
            <p className='text-white text-base'>To: {shortenAddress(addressTo)}</p>
          </a>
          <p className='text-white text-base'>Amount: {amount} ETH</p>
          {keyword && (
            <>
              <br />
              <p className='text-white text-base'>Contract Title: {keyword}</p>
            </>
          )}
          {message && (
            <>
              <p className='text-white text-base'>Message: {message}</p>
            </>
          )}
        </div>

        <a
          href={etherscanURL}
          target='_blank'
          className='w-full h-32 2xl:h-48 rounded-md shadow-lg object-cover'
          style={{
            // random color gradients
            backgroundImage: `linear-gradient(to right, ${gradientColors[Math.floor(Math.random() * gradientColors.length)]}, ${gradientColors[Math.floor(Math.random() * gradientColors.length)]})`
          }}
        />
        <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
          <p className='text-[#37c7da] font-bold'>{timestamp}</p>
        </div>
      </div>
    </div>
  )
}

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext)

  return (
    <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        {currentAccount ? (
          <h3 className='text-white text-3xl text-center my-2'>
            Latest Transactions
          </h3>
        ) : (
          <h3 className='text-white text-3xl text-center my-2'>
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className='flex flex-wrap justify-center items-center mt-10'>
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions

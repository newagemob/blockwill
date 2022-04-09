import React, { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

import { TransactionContext } from '../../context/TransactionContext'
import { shortenAddress } from '../../utils/shortenAddress'
import { Loader } from '..'
import EthereumCard from './currencyCards/EthereumCard'

const companyCommonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    onChange={(e) => handleChange(e, name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
  />
)

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext)

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData

    e.preventDefault()

    if (!addressTo || !amount || !keyword || !message) return

    sendTransaction()
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className='text-3xl sm:text-5xl text-[#23272a] py-1'>
            Assign Assets
            <br />
            <span className='text-2xl text-[#2c2f33] sm:text-3xl font-light'>
              to anyone in the world
            </span>
          </h1>
          <p className='text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base'>
            Select a beneficiary and send them a contract token
            to start the process of transferring your assets to them.
            Assets that you assign will not be locked, instead upon
            expiration of the contract token they will automatically be transferred to the beneficiary.
          </p>
          {!currentAccount && (
            <button
              type='button'
              onClick={connectWallet}
              className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
            >
              <AiFillPlayCircle className='text-white mr-2' />
              <p className='text-white text-base font-semibold'>
                Connect Wallet
              </p>
            </button>
          )}
        <EthereumCard />
        </div>


      </div>
    </div>
  )
}

export default Welcome

import { SiEthereum } from 'react-icons/si'
import { FaHandshake } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaFileContract } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'
import { useContext } from 'react'
import { TransactionContext } from '../../../context/TransactionContext'
import { shortenAddress } from '../../../utils/shortenAddress'
import { Loader } from '../..'

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

const BlockwillContractCard = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext)

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData

    e.preventDefault()

    if (!addressTo || !amount || !keyword || !message) return

    sendTransaction()
  }

  return (
    <>
      {/* Blockwill Token Info */}
      <div
        className='glassmorphism'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'auto',

          backgroundColor: '#fafafa',
          borderRadius: '10px',
          padding: '20px',
          margin: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          marginTop: '20px',
        }}
      >
        <div
          className='flex flex-col items-center justify-center'
          style={{
            color: '#99aab5'
          }}
        >
          <h2 className='text-center text-2xl font-semibold'>
            Mint Blockwill Tokens
          </h2>
          <p
            className='text-center text-sm font-light'
            style={{
              color: '#2c2f33',
              marginTop: '20px',
              textAlign: 'left'
            }}
          >
            Blockwill Tokens are a utility token that hold metadata about the Blockwill contract. Metadata includes the Beneficiary, the percentage of Ethereum to be granted from the current wallet, the contract title and a human-readable message.
            <br />
            <br />
            This metadata allows the Blockwill contract to grant access to the beneficiary upon contract expiration.
          </p>
        </div>
      </div>

      {/* Blockwill Token Card */}
      <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
        <div className='p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism '>
          <div className='flex justify-between flex-col w-full h-full'>
            <div className='flex justify-between items-start'>
              <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                <FaHandshake fontSize={21} color='#fff' />
              </div>
              <BsInfoCircle fontSize={17} color='#fff' />
            </div>
            <div>
              <p className='text-white font-light text-sm'>
                {shortenAddress(currentAccount)}
              </p>
              <p className='text-white font-semibold text-lg mt-1'>
                Blockwill Token
              </p>
            </div>
          </div>
        </div>

        {/* Send Now Form */}
        <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
          <div className='w-full inline-flex justify-between items-center'>
            <Input placeholder='Beneficiary' name='addressTo' type='text' handleChange={handleChange} />
            <span className='text-white font-semibold text-lg ml-4'>
              <GiReceiveMoney fontSize={21} color='#fff' />
            </span>
          </div>
          <div className='w-full inline-flex justify-between items-center'>
            <Input placeholder='Amount (ETH)' name='amount' type='number' handleChange={handleChange} />
            <span className='text-xs text-white font-light ml-4'>
              <SiEthereum fontSize={21} color='#fff' />
            </span>
          </div>
          <div className='w-full inline-flex justify-between items-center'>
            <Input placeholder='Contract Title' name='keyword' type='text' handleChange={handleChange} />
            <span className='text-xs text-white font-light ml-4'>
              <FaFileContract fontSize={21} color='#fff' />
            </span>
          </div>
          <div className='w-full inline-flex justify-between items-center'>
            <Input placeholder='Message' name='message' type='text' handleChange={handleChange} />
            <span className='text-xs text-white font-light ml-4'>
              <MdMessage fontSize={21} color='#fff' />
            </span>
          </div>

          <div className='h-[1px] w-full bg-gray-400 my-2' />

          {isLoading
            ? <Loader />
            : (
              <button
                type='button'
                onClick={handleSubmit}
                className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'
              >
                Send now
              </button>
            )}
        </div>
      </div>
    </>
  )
}

export default BlockwillContractCard

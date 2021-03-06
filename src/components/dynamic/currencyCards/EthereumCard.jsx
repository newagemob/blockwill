import { SiEthereum } from 'react-icons/si'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaFileContract } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'
import { useContext } from 'react'
import { TransactionContext } from '../../../context/TransactionContext'
import { shortenAddress } from '../../../utils/shortenAddress'
import { Loader } from '../../../components'

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

const EthereumCard = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext)

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData

    e.preventDefault()

    if (!addressTo || !amount || !keyword || !message) return

    sendTransaction()
  }

  return (
    <>
      <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
        <div className='p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism '>
          <div className='flex justify-between flex-col w-full h-full'>
            <div className='flex justify-between items-start'>
              <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                <SiEthereum fontSize={21} color='#fff' />
              </div>
              <BsInfoCircle fontSize={17} color='#fff' />
            </div>
            <div>
              <p className='text-white font-light text-sm'>
                {shortenAddress(currentAccount)}
              </p>
              <p className='text-white font-semibold text-lg mt-1'>
                Ethereum
              </p>
            </div>
          </div>
        </div>

        {/* <div
          className='flex flex-col items-center justify-center'
          style={{
            width: '66%',
            maxWidth: '366px',
            backgroundColor: '#fafafa',
            border: 'none',
            padding: '20px',
            margin: '20px 0',
          }}
        >
          <h1 className='text-center text-2xl font-semibold text-gray-400'>
            Send Ethereum
          </h1>
        </div> */}

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

export default EthereumCard

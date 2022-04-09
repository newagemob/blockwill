import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { TransactionContext } from '../../context/TransactionContext'
import { AiFillPlayCircle } from 'react-icons/ai'

// redirect to metamask wallet
const Wallets = () => {
    const { currentAccount, connectWallet, isLoading } = useContext(TransactionContext)
    return (
        <>
            {!currentAccount ? (
                <div
                    className='flex flex-col items-center justify-center h-screen'
                    style={{
                        marginTop: '-100px',
                    }}
                >
                    <div
                        className='flex flex-col justify-center'
                        style={{
                            width: '80%',
                            maxWidth: '500px',
                            textAlign: 'left',
                        }}
                    >
                        <p className='text-black text-base'>
                            We currently only support Metamask, but we are working to add more wallets.
                        </p>
                        <span
                            className='text-black text-base'
                            style={{
                                fontWeight: 'bold',
                            }}
                        >
                            Please connect your wallet to continue.
                        </span>
                    </div>

                    <div
                        className='flex items-center justify-center'
                        // card showing the user that they need to connect their wallet
                        style={{
                            width: '80%',
                            maxWidth: '500px',
                            backgroundColor: '#fafafa',
                            borderRadius: '10px',
                            padding: '20px',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                            marginTop: '20px'
                        }}
                    >
                        <a href='https://metamask.io/download/'>
                            <div className='flex flex-col items-center justify-center'>
                                <img
                                    src='https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg'
                                    alt='metamask'
                                    style={{
                                        width: '7rem',
                                        height: '7rem'
                                    }}
                                />
                                Metamask Download
                            </div>
                        </a>
                    </div>

                    <div
                        className='flex items-center justify-center'
                        // card showing the user that they need to connect their wallet
                        style={{
                            width: '80%',
                            maxWidth: '500px',
                            backgroundColor: '#fafafa',
                            borderRadius: '10px',
                            padding: '20px',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                            marginTop: '20px',
                        }}
                    >
                        <button
                            type='button'
                            onClick={connectWallet}
                            className='flex flex-row justify-center items-center my-5 bg-[#7289DA] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
                        >
                            <AiFillPlayCircle className='text-white mr-2' />
                            <p className='text-white text-base font-semibold'>
                                Connect Metamask Wallet
                            </p>
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className='flex flex-col items-center justify-center h-screen'
                    style={{
                        marginTop: '-100px',
                    }}
                >
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-center text-2xl font-semibold'>
                            Currently Connected Wallet:
                        </h1>
                    </div>
                    <br />
                    <div
                        className='flex items-center justify-center'
                        // card showing the user that they need to connect their wallet
                        style={{
                            width: '80%',
                            maxWidth: '500px',
                            backgroundColor: '#fafafa',
                            borderRadius: '10px',
                            padding: '20px',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        {/* show metamask wallet */}
                        <h2
                            className='text-center font-semibold'
                            style={{
                                width: '100%',
                                overflowX: 'auto',
                            }}
                        >
                            {currentAccount}
                        </h2>
                    </div>
                </div>
            )}
        </>
    )
}

export default Wallets
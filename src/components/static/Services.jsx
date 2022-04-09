import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className='flex flex-row w-full justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer shadow-xl hover:shadow-2xl rounded-xl'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h3 className='mt-2 text-black text-lg'>{title}</h3>
      <p className='mt-1 text-black text-sm md:w-9/12'>
        {subtitle}
      </p>
    </div>
  </div>
)

const Services = () => (
  <div className='flex w-full justify-center items-center'>
    <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
      <div className='flex-1 flex flex-col justify-start items-start'>
        <h1 className='text-black text-3xl sm:text-5xl py-2'>
          Services we maintain
          <br />
        </h1>
        <p className='text-left my-2 text-black font-light md:w-9/12 w-11/12 text-base'>
          We are constantly improving our infrastructure to be more useful, easier to use, and more secure. Trusting anyone with your assets is a difficult task, so don't trust anyone, trust the blockchain.
        </p>
      </div>

      <div className='flex-1 flex flex-col w-full justify-start items-center'>
        <ServiceCard
          color='bg-[#2952E3]'
          title='Security gurantee'
          icon={<BsShieldFillCheck fontSize={21} className='text-black' />}
          subtitle='Security is our top priority. We use the latest security protocols to protect your assets.'
        />
        <ServiceCard
          color='bg-[#8945F8]'
          title='No hidden fees'
          icon={<BiSearchAlt fontSize={21} className='text-black' />}
          subtitle='Our fee is always 0.01 ETH, and we never upcharge gas fees.'
        />
        <ServiceCard
          color='bg-[#F84550]'
          title='Distribute Evenly'
          icon={<RiHeart2Fill fontSize={21} className='text-black' />}
          subtitle='No need to update the contract every time you obtain ETH. We distribute in specified percentages or amounts.'
        />
      </div>
    </div>
  </div>
)

export default Services

import React from 'react'
import {AiFillHome} from 'react-icons/ai'
const Navbar = () => {
  return (
    <nav className='flex bg-slate-800 text-white w-[300px] items-center flex-col h-full p-4'>
      <div className='uppercase font-bold text-2xl'>
        Logo da empresa
      </div>
      <hr className='mt-2 w-full bg-white text-white opacity-40 shadow-lg' />
      <div className='flex h-full flex-col w-full items-center mt-10'>
        <ul className='w-full h-3/6 flex items-center justify-center flex-col'>
          <li className='
          flex flex-row items-center justify-center w-4/5 uppercase font-semibold text-lg cursor-pointer mt-8 h-20
          hover:rounded-sm hover:bg-slate-900
          '><AiFillHome className='mr-2' /> Home</li>
          <li className='
          flex flex-row items-center justify-center w-4/5 uppercase font-semibold text-lg cursor-pointer mt-8 h-20
          hover:rounded-sm hover:bg-slate-900
          '><AiFillHome className='mr-2' /> Home</li>
          <li className='
          flex flex-row items-center justify-center w-4/5 uppercase font-semibold text-lg cursor-pointer mt-8 h-20
          hover:rounded-sm hover:bg-slate-900
          '><AiFillHome className='mr-2' /> Home</li>
          <li className='
          flex flex-row items-center justify-center w-4/5 uppercase font-semibold text-lg cursor-pointer mt-8 h-20
          hover:rounded-sm hover:bg-slate-900
          '><AiFillHome className='mr-2' /> Home</li>
          <li className='
          flex flex-row items-center justify-center w-4/5 uppercase font-semibold text-lg cursor-pointer mt-8 h-20
          hover:rounded-sm hover:bg-slate-900
          '><AiFillHome className='mr-2' /> Home</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
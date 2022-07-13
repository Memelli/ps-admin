import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsGearFill} from 'react-icons/bs'
import {RiUserSettingsFill} from 'react-icons/ri'
import {FaTasks} from 'react-icons/fa'
import {SiGooglesearchconsole} from 'react-icons/si'
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
          flex flex-row items-center justify-start pl-5 w-full uppercase font-semibold text-lg cursor-pointer mt-4 h-20 shadow-sm shadow-neutral
          hover:rounded-sm hover:bg-slate-900
          '><AiFillHome className='mr-2' /> Home</li>
          <li className='
          flex flex-row items-center justify-start pl-5 w-full uppercase font-semibold text-lg cursor-pointer mt-4 h-20
          hover:rounded-sm hover:bg-slate-900
          '><BsGearFill className='mr-2' /> Configuracoes</li>
          <li className='
          flex flex-row items-center justify-start pl-5 w-full uppercase font-semibold text-lg cursor-pointer mt-4 h-20
          hover:rounded-sm hover:bg-slate-900
          '><RiUserSettingsFill className='mr-2' /> Usuarios</li>
          <li className='
          flex flex-row items-center justify-start pl-5 w-full uppercase font-semibold text-lg cursor-pointer mt-4 h-20
          hover:rounded-sm hover:bg-slate-900
          '><FaTasks className='mr-2' /> Pedidos</li>
          <li className='
          flex flex-row items-center justify-start pl-5 w-full uppercase font-semibold text-lg cursor-pointer mt-4 h-20
          hover:rounded-sm hover:bg-slate-900
          '><SiGooglesearchconsole className='mr-2' /> Logs</li>
        </ul>
      </div>
      <div>
        <button className='
        bg-red-600 px-20 py-3 rounded-md uppercase font-bold
          hover:bg-red-900 hover:shadow-lg
        '>
          Deslogar
        </button>
      </div>
    </nav>
  )
}

export default Navbar
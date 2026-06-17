import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { FaArrowLeft } from 'react-icons/fa6'

const MainPage = () => {
  const navigate = useNavigate()

  return (
    <div className='relative bg-red-900 min-h-screen flex flex-col lg:flex-col justify-center items-center'>
      <motion.button
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-6 left-6 bg-yellow-500 text-black px-2 py-2 rounded-full"
      >
        <div className='flex items-center gap-3 font-bold'>
          <FaArrowLeft />
        </div>
      </motion.button>
      <div className='flex items-center text-center'>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className='font-semibold text-yellow-600 text-xl sm:text-2xl lg:text-6xl pb-16 pt-44'>pick one(the cake one first PLEASE)</motion.h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-24'>
        <NavLink to="/firstpart">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={assets.download} alt="" className='w-48 md:w-56 lg:w-72 h-auto' />
        </NavLink>
        <NavLink to="/secondpart">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={assets.download4} alt="" className='w-56 md:w-72 lg:w-96 h-auto pt-14' />
        </NavLink>
      </div>
    </div>
  )
}

export default MainPage

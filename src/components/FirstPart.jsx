import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

const FirstPart = () => {
    const navigate = useNavigate()

    return (
        <div className='relative min-h-screen bg-red-900 flex flex-col lg:flex-row items-center'>
            <motion.button
                onClick={() => navigate('/main')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-6 left-6 bg-yellow-500 text-black px-5 py-3 rounded-full"
            >
                <div className='flex items-center gap-3 font-bold'>
                    <FaArrowLeft />
                    Go back
                </div>
            </motion.button>
            <div className='pt-16 lg:pb-32'>
                <img src={assets.download2} alt="" className='h-auto w-16 sm:w-20 md:w-24 lg:w-72 ml-4 sm:ml-8 md:ml-16 lg:ml-40' />
            </div>
            <div className='font-rouge text-center max-w-5xl mx-auto lg:ml-20'>
                <motion.h1
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='font-semibold text-yellow-600 text-left text-3xl sm:text-4xl lg:text-5xl px-4 sm:px-8 md:px-16 lg:px-32 lg:pb-4'>
                    Hi baby, I want to wish you a happy birthday again because it is a very special day. 
                    It is the day you came into the world, and since then, you have been making people happy 
                    (including me). I really hope you enjoy your day. Even if you think you are not special, 
                    I will never agree with you, because a person like you who is so kind, sweet, and mindful 
                    is definitely special and deserves the best. I hope you know I really love you, 
                    and I hope you keep being the same person you've always been, because you are unique ❤️. 
                </motion.h1>
            </div>
        </div>
    )
}

export default FirstPart

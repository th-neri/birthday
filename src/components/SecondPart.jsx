import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

const SecondPart = () => {
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
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='flex flex-col items-center w-full max-w-2xl mx-auto pt-44'>
                <h1 className='font-semibold text-yellow-600 text-center text-2xl sm:text-3xl lg:text-4xl'>A LITTLE PLAYLIST FOR YOU!</h1>
                <div className="w-full flex justify-center px-4">
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-7xl">
                        <iframe
                            style={{ borderRadius: "30px" }}
                            src="https://open.spotify.com/embed/playlist/5tbWLVn4hUSZcxG4ZZhUer?si=0b3d614f61c94da6"
                            
                            width="100%"
                            height="380"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            className="w-full max-w-2xl rounded-2xl shadow-2xl transition duration-300"
                        />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='lg:pt-52'>
                <img src={assets.download3} alt="" className='h-auto w-40 sm:w-56 md:w-64 lg:w-96 ml-4 sm:ml-8 md:ml-16 lg:mr-56' />
            </motion.div>
        </div>
    )
}

export default SecondPart


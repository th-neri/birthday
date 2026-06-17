import React from 'react'
import { motion } from "motion/react"
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { FaRegHeart } from "react-icons/fa6";

const Home = () => {
    return (
        <div className="bg-red-900 min-h-screen flex justify-center items-center">
            <div className="flex flex-col lg:flex-row justify-center gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <img src={assets.download6} alt="" className="w-72 md:w-72 lg:w-2xl h-auto" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                    }}
                    className='lg:pt-52 flex justify-center'
                >
                    <NavLink to="/main">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-700 flex items-center px-14 py-2 lg:px-30 lg:py-6 rounded-full cursor-pointer transition-transform duration-100">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <FaRegHeart size={40} />
                            </motion.div>
                        </motion.button>
                    </NavLink>
                </motion.div>
            </div>
        </div>
    )
}

export default Home



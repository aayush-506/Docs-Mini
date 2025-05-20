import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { motion } from "motion/react"

const Card = ({data,reference}) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='bg-zinc-500 w-60 h-70 rounded-[45px] relative left-2 top-2 text-white overflow-hidden flex-shrink-0'>
            <div className='absolute left-8 top-7 right-6 leading-6'>

                <FaFileAlt size="1rem" />
                <p className='mt-4 text-sm font-semibold'>{data.description}</p>
            </div>
            <div className='absolute bottom-14  h-9 w-full flex justify-between px-8 py-2 font-semibold'>
                <div className=''>{data.size}</div>
                <span className='h-6 w-6 bg-zinc-700 flex items-center justify-center rounded-2xl'>
                    {data.available ? <IoMdDownload  /> : <ImCancelCircle /> }
                    
                </span>
                
            </div>
            {
                data.status.available && (
                    <div className={`footer absolute bottom-0 ${data.status.color == "blue" ? "bg-sky-600" : "bg-green-600"} h-14 w-60 flex items-center justify-center font-bold`}>
                    <h1>Download Now</h1>
                </div>
                )
            }
            
        </motion.div>
    )
}

export default Card
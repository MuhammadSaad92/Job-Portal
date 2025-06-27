import React from 'react'
import { BsGoogle } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import {motion} from 'framer-motion'
import { BiCalendar } from 'react-icons/bi'

const JobCard = ({company, company_icon, location, job_type, job, date, address}) => {
  return (
    <motion.div initial={{y:50, opacity: 0}} whileInView={{y:0,opacity: 1}} animate={{delay:0.3, y: {type:"just"}}} className='shadow rounded-xl bg-white w-full  p-5 cursor-pointer hover:bg-slate-100 mx-auto'>
    <div className='upper flex justify-between items-center '>
        <div className='flex items-center gap-2'>
        <div className='rounded-full bg-slate-100 w-10 h-10 flex justify-center items-center'>
            <BsGoogle/>
        </div>
        <div>
            <h2 className='font-semibold text-gray-800'>{company}</h2>
            <div className='flex items-center gap-1'><GrLocation className='text-red-600'/><p className='text-sm'>{address}</p></div>
        </div>
        </div>
        <div><button className='rounded-full border text-blue-500 border-blue-500 px-1.5'>save</button></div>
    </div>
    <hr className='mt-4'/>
    <div className='middle mt-5'>
        <h2 className='text-lg text-blue-600 font-semibold'>{job}</h2>
        <ul className=' list-disc list-inside marker:text-red-600'>
            <li className='text-xs'>{location}</li>
        </ul>
    </div>
    <div className='lower flex justify-between mt-5'>
        <div className='flex gap-2 items-center text-sm'><BiCalendar className='text-blue-500'/> August 6, 2025</div>
        <div><button className='rounded-full border bg-blue-500 text-white border-blue-500 px-2 py-1 text-sm hover:animate-pulse ' >Apply Now</button></div>
    </div>
</motion.div>
  )
}

export default JobCard
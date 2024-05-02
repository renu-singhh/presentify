import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-3xl bg-slate-800 '>
      <div className='text border-t-2 border-b-2 border-zinc-700 flex whitespace-nowrap  overflow-hidden'>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[9vw] leading-none font-["Founders_Grotesk_X-Condensed"]  uppercase pt-10 pr-20 font-semibold'>
          we are presentify
        </motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[9vw] leading-none font-["Founders_Grotesk_X-Condensed"]  uppercase pt-10 pr-20 font-semibold'>
          we are presentify 
        </motion.h1>
       

      </div>
    </div>
  )
}

export default Marquee

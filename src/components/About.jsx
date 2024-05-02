import React from 'react'

const About = () => {
  return (
      <div className='w-full p-20 bg-slate-300 rounded-tl-3xl'> 
          <h1 className='text-3xl leading-[3vw] tracking-tight'> We believe in the transformative power of innovation and the boundless potential of human creativity. 
            Our mission is to empower individuals and
             businesses alike to reach new heights of success.</h1>
      <div className='w-full border-t-[2px] pt-10 mt-20 border-zinc-800'></div>
      <div className='flex gap-10'>
      <div className='w-1/2 '>
      <h1 className='text-5xl'> Our Approch</h1>
      <button className=' flex gap-10 items-center px-10 py-6 bg-slate-700  mt-10 rounded-full text-white'> Read More
      <div className='w-2 h-2 bg-slate-300 rounded-full'></div>
      </button>
      </div>   
      <div className='w-1/2 h-[50vh] rounded  bg-cover bg-center bg-slate-700 bg-[url("image2.jpg")]'> </div>
      </div>
      </div>
  )
}

export default About

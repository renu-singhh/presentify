import React from 'react';

function Featured() {
    return (
        <div className='w-full py-20'>
            <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-6xl text-black'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    <div className='cardcontainer relative w-1/2 h-[80vh]'>
                       
                        <div className='card w-full h-full rounded-xl bg-blue-400 overflow-hidden'>
                            <img className='w-full h-full bg-cover transform transition  hover:scale-110' src="image.jpg" alt="" />
                        </div>
                    </div>
                    <div className='cardcontainer relative w-1/2 h-[80vh]'>
                        <h1 className='absolute right-full translate-x-1/2 top-1/2 -transalte-y-1/2 z-[9] leading-none tracking-tighter text-6xl text-white transition  transform hover:scale-110'>
                            {"RENU SINGH".split('').map((item, index) => <span key={index} className='hover:text-blue-500'>{item}</span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl bg-blue-400 overflow-hidden'>
                            <img className='w-full h-full bg-cover transform transition  hover:scale-110' src="image2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;

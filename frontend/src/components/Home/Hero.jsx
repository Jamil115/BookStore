import React from 'react'
import RecentlyAdded from './RecentlyAdded'

export default function Hero() {
    return (
        <div>
            <div className='h-[90vh] grid grid-cols-3'>
                <div className=' mx-32 pl-14 pr-20 grid col-span-2 items-center content-center'>
                    <h1 className='text-7xl text-violet-600 font-semibold'>Discover Your Next Great Read</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur ex quibusdam quaerat repellat. Minima quisquam perferendis, suscipit delectus placeat optio ipsum doloremque cumque modi.</p>
                    <button className='p-2 mx-32 mt-12 rounded-lg border-2 border-gray-400 hover:bg-black hover:text-white hover:font-semibold'>Discover Books</button>
                </div>
                <div className=' mt-52 '>
                    <img src="../../../public/hero.png" alt="hero" className='w-[500px] h-[300]'/>
                </div>
            </div>
            <RecentlyAdded />
        </div>
    )
}

import React from 'react'
import { MovieIcon, MusicIcon, Notification, Qrcode, Search } from './components/Icons'
import Popular from './components/Popular'
import Streaming from './components/Streaming'

const Home = () => {
    return (
        <div>
            {/* top navigator */}
            <div className='bg-gray-800 flex justify-between items-center'>
                <div className='flex flex-col ml-2 p-1 justify-center'>
                <h2 className='text-white font-semibold text-2xl'>It All Starts Here</h2>
                <p className='text-white font-light text-base'>Location	&gt;</p>
                </div>
                <div className='flex space-x-4 mr-2'>
                    <Search />
                    <Notification/>
                    <Qrcode/>
                </div>
            </div>
            {/*categories */}
            <div className='flex justify-between p-4 '>
                <div className='flex flex-col items-center'>
                    <MovieIcon />
                    <p>Movies</p>
                </div>
                <div className='flex flex-col items-center'>
                    <MusicIcon />
                    <p>Events</p>
                </div>
                <div className='flex flex-col items-center'>
                    <MovieIcon/>
                    <p>Stream</p>
                </div>
            </div>
            {/*Popular Events*/}
            <Popular />
            {/* Streaming Events */}
            <Streaming/>
        </div>
    )
}

export default Home

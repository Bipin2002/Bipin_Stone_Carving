import React from 'react'

const Banner1 = () => {
    return (
        <div className='bg-black text-white pb-12 relative z-50'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                        <img src="src/assets/hello.jpg" alt="" />
                    </div>
                    <div className='space-y-3 xl:pr36
                    p-4 border-b-2 border-r-2
                    border-r-sky-800 border-b-sky-800'>
                        <p className='text-sky-800 uppercase'>Our Mission</p>
                        <h1 className='uppercase text-5xl'>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, deleniti, ipsum tenetur quibusdam fugiat voluptatum commodi at autem impedit earum assumenda atque harum porro officiis quas sunt. Adipisci, nesciunt numquam!</p>
                        <button className='primary-button'>learn more</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner1
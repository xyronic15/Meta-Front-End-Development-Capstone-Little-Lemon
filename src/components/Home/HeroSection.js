import React from 'react'
import food from '../../assets/restauranfood.jpg'
import Button from '../Button'

const HeroSection = () => {
    return (
        <section className="bg-[#495E57] grid grid-cols-2 items-center px-10 xl:px-64 py-10 gap-18">
            <div className="flex flex-col justify-center">
                <h1 className='text-[#F4CE14]'>Little Lemon</h1>
                <h2 className='text-white mt-[-40px]'>Chicago</h2>
                <p className='text-white text-[24px] mb-8'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <Button link={'/reserve'} text={'Reserve a table'} />
            </div>
            <div className="flex justify-center" >
                <img className='rounded-[16px] max-w-[375px]' src={food} alt='Restaurant Food - Bruschetta' />
            </div>
        </section>
    )
}

export default HeroSection
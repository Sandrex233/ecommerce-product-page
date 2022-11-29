import React, { useState } from 'react'
import Image1 from '../assets/image-product-1.jpg'
import Image2 from '../assets/image-product-2.jpg'
import Image3 from '../assets/image-product-3.jpg'
import Image4 from '../assets/image-product-4.jpg'



const Product = ({ count, setCount }) => {
    const [toggle, setToggle] = useState(1)


    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrementCount = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    return (
        <div className='flex justify-center flex-row items-center  py-20'>
            <div className='flex flex-col  px-36'>
                <div className='flex justify-center items-center'>
                    <img src={Image1} alt="" style={{ width: '400px' }} className="rounded-md" />
                </div>
                <div className='flex justify-center items-center flex-row py-4 gap-[13px]'>
                    <img src={Image1} alt="" style={{ width: '90px' }} className="rounded-md" />
                    <img src={Image2} alt="" style={{ width: '90px' }} className="rounded-md" />
                    <img src={Image3} alt="" style={{ width: '90px' }} className="rounded-md" />
                    <img src={Image4} alt="" style={{ width: '90px' }} className="rounded-md" />
                </div>
            </div>
            <div className='max-w-[550px] flex flex-col justify-start rounded-lg '>
                <p className='tracking-wide ml-10 uppercase text-[#FF7D1A] font-semibold'>Sneaker Company</p>
                <div className="">Gabrielle <br /> Essence Eau <br /> De Parfum</div>
                <div className="">
                    A floral, solar and voluptuous <br /> interpretation composed by <br /> Olivier Polge,
                    Perfumer-Creator <br /> for the House of CHANEL.
                </div>
                <div className="">
                    <h1>$149.99</h1>
                    <p>$169.99</p>
                </div>
                <div className="">
                    <button type="button" clas>
                        <i className="gg-shopping-cart"></i>
                        <p>Add to Cart</p>
                    </button>
                </div>
                <div className=''>
                    <button className='px-5 p-2 bg-yellow-200' onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button className='px-5 p-2 bg-yellow-200' onClick={incrementCount} >+</button>
                </div>
            </div>
        </div>
    )
}

export default Product
import React from 'react'
import Image1 from '../assets/image-product-1.jpg'
import Image2 from '../assets/image-product-2.jpg'
import Image3 from '../assets/image-product-3.jpg'
import Image4 from '../assets/image-product-4.jpg'



const Product = () => {
    return (
        <div className='flex justify-between py-20'>
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
            <div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default Product
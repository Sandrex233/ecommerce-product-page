<<<<<<< HEAD
=======
import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
>>>>>>> 74f0d3b (Image Component)
import Image1 from '../assets/image-product-1.jpg'
import Image2 from '../assets/image-product-2.jpg'
import Image3 from '../assets/image-product-3.jpg'
import Image4 from '../assets/image-product-4.jpg'
<<<<<<< HEAD
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
=======

>>>>>>> 74f0d3b (Image Component)



const Product = ({ count, setCount, isCleared, setIsCleared, isClicked, setIsClicked }) => {

<<<<<<< HEAD
=======
    const slides = [
        Image1,
        Image2,
        Image3,
        Image4
    ]

    const [currentIndex, setCurrentIndex] = useState(0)


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }


    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }


    const goToSlide = index => {
        setCurrentIndex(index)
    }


>>>>>>> 74f0d3b (Image Component)
    const handleClick = () => {
        setIsClicked(!isClicked)
    }


<<<<<<< HEAD

=======
>>>>>>> 74f0d3b (Image Component)
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

<<<<<<< HEAD
=======

>>>>>>> 74f0d3b (Image Component)
    const decrementCount = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

<<<<<<< HEAD
=======

>>>>>>> 74f0d3b (Image Component)
    return (
        <div className='flex flex-row items-center'>
            <div className='flex flex-col  px-36'>
                <div className='flex justify-center items-center'>
<<<<<<< HEAD
                    <img src={Image1} alt="" className="rounded-md max-w-[500px]" />
                </div>
                <div className='flex justify-center items-center flex-row py-4 gap-[13px]'>
=======
                    <BsArrowLeftSquare onClick={goToPrevious} size={40} className="cursor-pointer" />
                    <img src={`${slides[currentIndex]}`} alt="" className="rounded-md max-w-[500px]" />
                    <BsArrowRightSquare onClick={goToNext} size={40} className="cursor-pointer" />
                </div>
                <div className='flex justify-center items-center flex-row py-4 gap-[13px]'>
                    {slides.map((slide, index) => (
                        <div key={index} onClick={() => goToSlide(index)}>
                            <img src={slide} className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" alt="" />
                        </div>
                    ))}</div>
                {/* <div className='flex justify-center items-center flex-row py-4 gap-[13px]'>
>>>>>>> 74f0d3b (Image Component)
                    <img src={Image1} alt="" className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" />
                    <img src={Image2} alt="" className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" />
                    <img src={Image4} alt="" className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" />
                    <img src={Image3} alt="" className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" />
<<<<<<< HEAD
                </div>
=======
                </div> */}
>>>>>>> 74f0d3b (Image Component)
            </div>
            <div className='flex flex-col rounded-lg '>
                <p className='tracking-wide ml-10 uppercase text-[#FF7D1A] font-semibold'>Sneaker Company</p>
                <div className="">Gabrielle <br /> Essence Eau <br /> De Parfum</div>
                <div className="max-w-sm">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they'll withstand everything the weather can offer.
                </div>
                <div className="">
                    <h1>$149.99</h1>
                    <p>$169.99</p>
                </div>
                <div className='flex flex-row items-center'>
                    <div className='flex justify-center items-center'>
                        <button className='px-5 p-2 text-yellow-600 text-xl ' onClick={decrementCount}><AiOutlineMinus /></button>
                        <span>{count}</span>
                        <button className='px-5 p-2 text-yellow-600 text-xl ' onClick={incrementCount}><AiOutlinePlus /></button>
                    </div>
                    <div className="">
                        <button type="button" onClick={handleClick} className='text-white rounded-lg  p-1 px-10  bg-[#FF7D1A]'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
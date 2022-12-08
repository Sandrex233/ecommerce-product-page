import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'



import Image1 from '../assets/image-product-1.jpg'
import Image2 from '../assets/image-product-2.jpg'
import Image3 from '../assets/image-product-3.jpg'
import Image4 from '../assets/image-product-4.jpg'
import Modal from './Modal'



const Product = ({ count, setCount, isCleared, setIsCleared, isClicked, setIsClicked }) => {

    const slides = [
        Image1,
        Image2,
        Image3,
        Image4
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [openModal, setOpenModal] = useState(false)


    const handleOpenModal = index => {
        if (window.innerWidth > 757) {
            setCurrentIndex(index)
            setOpenModal(true)
        }
    }


    const handleCloseModal = () => {
        setOpenModal(false)
    }


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


    const handleClick = () => {
        setIsClicked(!isClicked)
    }


    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrementCount = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    return (
        <div className='flex flex-col md:flex-row items-center'>
            <Modal
                handleCloseModal={handleCloseModal}
                goToPrevious={goToPrevious}
                goToNext={goToNext}
                slides={slides}
                currentIndex={currentIndex}
                openModal={openModal}
                goToSlide={goToSlide}
            />
            <div className='flex flex-col  md:px-36'>
                <div className='flex'>
                    <BsArrowLeftSquare onClick={goToPrevious} size={40} className=" block md:hidden fixed cursor-pointer  text-white z-50 top-64" />
                    <BsArrowRightSquare onClick={goToNext} size={40} className=" block md:hidden  fixed cursor-pointer  text-white z-50 top-64 right-1" />
                    <img src={`${slides[currentIndex]}`} alt="" className="cursor-pointer rounded-md max-w-[390px] max-h-[400px] md:max-h-[500px] md:max-w-[500px] " onClick={() => handleOpenModal(currentIndex)} />
                </div>
                <div className='hidden md:flex justify-center items-center flex-row py-4 gap-[13px]'>
                    {slides.map((slide, index) => (
                        <div key={index} onClick={() => goToSlide(index)}>
                            <img src={slide} className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col rounded-lg mt-6 md:mt-0 p-3 md:p-0'>
                <p className='tracking-wide mb-5 uppercase font-kumbh text-[#f8974c] font-semibold'>Sneaker Company</p>
                <h1 className='text-4xl mb-8 font-bold font-kumbh max-w-sm
                '>Fall Limited Edition Sneakers</h1>
                <p className="max-w-sm md:max-w-md mb-8 leading-normal font-kumbh text-gray-600 tracking-wide">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div className='flex flex-row md:flex-col items-center md:items-start  md:space-x-0 ' >
                    <div className='flex flex-row space-x-5 md:space-x-10 mr-32 items-center'>
                        <h1 className='text-3xl font-bold'>$125.0</h1>
                        <p className='bg-[#FFEDE0] rounded-md p-1 text-[#FF7D1A] font-semibold'>50%</p>
                    </div>
                    <p className='line-through text-gray-400'>$250.0</p>
                </div>
                <div className='flex flex-col md:flex-row items-center mt-5 md:space-x-3 space-y-5 md:space-y-0 mb-7'>
                    <div className='flex justify-center items-center bg-slate-100 rounded-md'>
                        <button className='px-16 md:px-5 md:p-2 text-yellow-600 text-xl' onClick={decrementCount}><AiOutlineMinus /></button>
                        <span>{count}</span>
                        <button className='px-16 md:px-5 md:p-2 text-yellow-600 text-xl ' onClick={incrementCount}><AiOutlinePlus /></button>
                    </div>
                    <button type="button" onClick={handleClick} className='text-white rounded-lg space-x-3 p-1 px-20 md:px-10 text-xl  bg-[#FF7D1A] justify-center items-center flex flex-row shadow-2xl shadow-[#d18951]'>
                        <AiOutlineShoppingCart />
                        <span>
                            Add to Cart
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
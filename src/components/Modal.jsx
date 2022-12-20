import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'

import Image1 from '../assets/image-product-1.jpg'
import Image2 from '../assets/image-product-2.jpg'
import Image3 from '../assets/image-product-3.jpg'
import Image4 from '../assets/image-product-4.jpg'

const Modal = ({ openModal, handleCloseModal, goToPrevious, goToNext, slides, currentIndex, goToSlide }) => {
    return (
        <div>
            {openModal &&
                <div className=''>
                    <div className='sliderWrap flex flex-col'>
                        <AiFillCloseCircle onClick={handleCloseModal} size={40} className="btnClose hover:text-orange-200" />
                        <BsArrowLeftSquare onClick={goToPrevious} size={40} className="btnPrev hover:text-orange-200" />
                        <BsArrowRightSquare onClick={goToNext} size={40} className="btnNext hover:text-orange-200" />
                        <div className=''>
                            <img src={`${slides[currentIndex]}`} alt="" className='cursor-pointer rounded-md max-w-[700px]' />
                        </div>
                        <div className='flex justify-center items-center flex-row py-4 gap-[13px]'>
                            {/* {slides.map((slide, index) => (
                                <div key={index} onClick={() => goToSlide(index)}>
                                    <img src={slide} className="rounded-md max-w-[125px] cursor-pointer hover:opacity-60" alt="" />
                                </div>
                            ))} */}
                            <div onClick={() => goToSlide(0)} className={currentIndex === 0 ? "rounded-lg border-[3px] bg-white border-[#ff7d1a]" : ""}>
                                <img src={Image1} className={currentIndex === 0 ? "max-w-[115px] cursor-pointer opacity-40" : "rounded-md max-w-[115px]  cursor-pointer hover:opacity-60"} alt="Image1" />
                            </div>
                            <div onClick={() => goToSlide(1)} className={currentIndex === 1 ? "rounded-lg border-[3px] bg-white  border-[#ff7d1a]" : ""}>
                                <img src={Image2} className={currentIndex === 1 ? "max-w-[115px]  cursor-pointer opacity-40" : "rounded-md max-w-[115px]  cursor-pointer hover:opacity-60"} alt="Image2" />
                            </div>
                            <div onClick={() => goToSlide(2)} className={currentIndex === 2 ? "rounded-lg border-[3px] bg-white  border-[#ff7d1a]" : ""}>
                                <img src={Image3} className={currentIndex === 2 ? "max-w-[115px]  cursor-pointer opacity-40" : "rounded-md max-w-[115px]  cursor-pointer hover:opacity-60"} alt="Image3" />
                            </div>
                            <div onClick={() => goToSlide(3)} className={currentIndex === 3 ? "rounded-lg border-[3px] bg-white  border-[#ff7d1a]" : ""}>
                                <img src={Image4} className={currentIndex === 3 ? "max-w-[115px] cursor-pointer opacity-40" : "rounded-md max-w-[115px]  cursor-pointer hover:opacity-60"} alt="Image4" />
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Modal
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'

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
                            {slides.map((slide, index) => (
                                <div key={index} onClick={() => goToSlide(index)}>
                                    <img src={slide} className="rounded-md max-w-[125px] cursor-pointer hover:opacity-60" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Modal
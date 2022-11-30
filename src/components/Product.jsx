import Image1 from '../assets/image-product-1.jpg'
import Image2 from '../assets/image-product-2.jpg'
import Image3 from '../assets/image-product-3.jpg'
import Image4 from '../assets/image-product-4.jpg'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'



const Product = ({ count, setCount, isClicked, setIsClicked, isCleared }) => {

    const handleClick = () => {
        if (isCleared) {
            setIsClicked(!isClicked)
        }
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
        <div className='flex flex-row items-center'>
            <div className='flex flex-col  px-36'>
                <div className='flex justify-center items-center'>
                    <img src={Image1} alt="" className="rounded-md max-w-[500px]" />
                </div>
                <div className='flex justify-center items-center flex-row py-4 gap-[13px]'>
                    <img src={Image1} alt="" className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" />
                    <img src={Image2} alt="" className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" />
                    <img src={Image4} alt="" className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" />
                    <img src={Image3} alt="" className="rounded-md max-w-[115px] cursor-pointer hover:opacity-60" />
                </div>
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
import { BsTrash } from 'react-icons/bs'
import Image1 from '../assets/image-product-1.jpg'


const Cart = ({ cart, count, isClicked, setCount, isCleared, setIsCleared }) => {

    const handleClear = () => {
        setIsCleared(!isCleared)
    }

    if (isCleared) {
        window.location.reload(false)
    }



    return (
        <div>
            {count === 0 || !isClicked || isCleared
                ?
                <div className="absolute right-12 mt-5 max-w-80 bg-white flex flex-col justify-center space-y-4 p-4 items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]  border-2 border-gray-600 rounded-md">
                    <h1 className="font-bold">Cart</h1>
                    <p className="text-gray-500">Your cart is empty.</p>
                </div>
                :
                <div className='absolute right-12 mt-5 max-w-80 bg-white flex flex-col justify-center space-y-4 p-4 items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]  border-2 border-gray-600 rounded-md'>
                    <h1 className="font-bold">Cart</h1>
                    <div className="flex flex-row">
                        <img src={Image1} alt="" className="rounded-md max-w-[50px] mr-2" />
                        <div className="">
                            <h1 className='text-gray-500'>Fall Limited Edition Sneakers</h1>
                            <div className="flex flex-row justify-between">
                                <p className="text-gray-500">$125.00 x {count} <span className="font-bold text-black">${count * 125 + '.00'}</span></p>
                                <BsTrash className='cursor-pointer' onClick={handleClear} />
                            </div>
                        </div>
                    </div>
                    <button className="text-white rounded-lg  p-3 px-24  bg-[#FF7D1A]">Checkout</button>
                </div>
            }

        </div>
    )
}

export default Cart



const Cart = ({ cart, count }) => {


    return (
        <div>
            {count === 0
                ?
                <div className="absolute right-12 mt-5 w-80 bg-white flex flex-col justify-center space-y-4 p-4 items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]  border-2 border-gray-600 rounded-md">
                    <h1 className="font-bold">Cart</h1>
                    <p className="text-gray-500">Your cart is empty.</p>
                </div>
                :
                <div className='absolute right-12 mt-5 w-80 bg-white flex flex-col justify-center space-y-4 p-4 items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]  border-2 border-gray-600 rounded-md'>
                    <h1 className="font-bold">Cart</h1>
                    <div className="flex flex-row">
                        <img src="" alt="" />
                        <div className="flex flex-col">
                            <h1>Fall Limited Edition Sneakers</h1>
                            <div className="flex flex-row">
                                <p>$125.00 x {count}  </p> <span className="font-bold"> ${count * 125.00}</span>
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
import { useState } from 'react'
import Logo from '../assets/logo.svg'
import carT from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'
import Cart from './Cart'

const Navbar = ({ count, setCount, isClicked, isCleared, setIsCleared }) => {
    const [cart, setCart] = useState(true)


    const handleCart = () => setCart(!cart)


    return (
        <div className='flex flex-row justify-between px-32 py-10'>
            <div className='flex flex-row justify-center items-center gap-10'>
                <img src={Logo} alt="Logo" />
                <ul className='flex flex-row gap-5 font-kumbh cursor-pointer items-center font-normal'>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>Collections</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>Men</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>Women</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>About</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>Contact</li>
                </ul>
            </div>

            <div className='flex flex-row justify-end pl-24'>
                <ul className='flex flex-row justify-center items-center gap-5'>
                    <div>
                        {isClicked && count > 0
                            ? <span className='bg-[#FF7D1A] rounded-md px-1 py-[0px] text-white absolute right-[195px] top-[40px] z-10'>
                                {!isCleared ? count : null}
                            </span>
                            : null
                        }
                        <img src={carT} alt="Cart" className='hovered' onClick={handleCart} />
                        {!cart ? <Cart
                            cart={cart}
                            count={count}
                            isClicked={isClicked}
                            isCleared={isCleared}
                            setIsCleared={setIsCleared}
                            setCount={setCount}
                        /> : null}
                    </div>
                    <img src={Avatar} alt="" style={{ width: '50px' }} className="hover:border-[#ff7d1a] rounded-full border-2 cursor-pointer" />
                </ul>
            </div>
        </div>
    )
}

export default Navbar
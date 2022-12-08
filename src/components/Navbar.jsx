import { useState } from 'react'
import Logo from '../assets/logo.svg'
import carT from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'
import Cart from './Cart'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';


const Navbar = ({ count, setCount, isClicked, isCleared, setIsCleared }) => {
    const [cart, setCart] = useState(true)
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    const handleCart = () => setCart(!cart)


    return (
        <div className='flex flex-row justify-between items-center md:px-32 md:py-10'>

            <div onClick={handleClick} className='md:hidden z-10 text-black'>
                {!nav ? <GiHamburgerMenu size={30} /> : <GrClose size={30} />}
            </div>
            <img src={Logo} alt="" className='md:hidden flex ' />

            <div className='hidden md:flex flex-row justify-center items-center gap-10'>
                <img src={Logo} alt="Logo" />
                <ul className='flex flex-row gap-5 font-kumbh cursor-pointer items-center font-normal'>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>Collections</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>Men</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>Women</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>About</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-[#ff7d1a]'>Contact</li>
                </ul>
            </div>

            <div className={!nav
                ? 'hidden'
                : 'absolute top-0 left-0 w-2/3 h-screen bg-white text-black text-4xl pl-10 font-medium flex flex-col justify-center items-start'}>
                <ul className='space-y-4'>

                    <li onClick={handleClick} className='cursor-pointer py-2'>Collections</li>
                    <li onClick={handleClick} className='cursor-pointer py-2'>Men</li>
                    <li onClick={handleClick} className='cursor-pointer py-2'>Women</li>
                    <li onClick={handleClick} className='cursor-pointer py-2'>About</li>
                    <li onClick={handleClick} className='cursor-pointer py-2'>Contact</li>
                </ul>
            </div>


            <div className='flex flex-row justify-end md:pl-24'>
                <ul className='flex flex-row justify-center items-center gap-5'>
                    <div>
                        {isClicked && count > 0
                            ? <span className='bg-[#FF7D1A] rounded-md px-[2px] md:px-1 py-[0px] text-white absolute md:right-[195px] right-16 top-1 md:top-[40px] z-10'>
                                {!isCleared ? count : null}
                            </span>
                            : null
                        }
                        <img src={carT} alt="Cart" className='cursor-pointer hover:opacity-90' onClick={handleCart} />
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
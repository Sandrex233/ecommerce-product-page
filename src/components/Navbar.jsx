import React from 'react'
import Logo from '../assets/logo.svg'
import Cart from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'

const Navbar = ({ count }) => {
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
                        {count > 0
                            ? <span className='bg-[#FF7D1A] rounded-md px-1 py-[0px] text-white absolute right-[195px] top-[40px] z-10'>{count}</span>
                            : ''
                        }
                        <img src={Cart} alt="Cart" className='hovered' />
                    </div>
                    <img src={Avatar} alt="" style={{ width: '50px' }} className="hover:border-[#ff7d1a] rounded-full border-2 cursor-pointer" />
                </ul>
            </div>
        </div>
    )
}

export default Navbar
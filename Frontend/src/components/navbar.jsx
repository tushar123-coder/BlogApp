import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { IoMenu, IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import avatarImg from '../../public/commentor.png'
import { useLogoutUserMutation } from '../redux/features/auth/authApi';
import { logout } from '../redux/features/auth/authSlice';
function navbar() {
    const navlist = [
        { name: "Home", path: '/' },
        { name: "About us", path: '/about-us' },
        { name: "Privacy Policy", path: '/privacy-policy' },
        { name: "Contact Us", path: '/contact-us' }
    ]
    const user = useSelector((state) => state.auth.user); 

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toogleMenu = () => setIsMenuOpen(!isMenuOpen)

    const dispatch = useDispatch()
    const [logoutUser] = useLogoutUserMutation()

    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout())
        } catch (error) {

        }
    }
    {

    }
    return (
        <header className='bg-white py-6 border'>
            <nav className='container mx-auto flex justify-between px-5'>
                <a href="/">
                    <img src="/logo.png" alt="" className='h-12' />
                </a>
                <ul className='sm:flex hidden items-center gap-8'>
                    {
                        navlist.map((list, index) => (
                            <li key={index}>
                                <NavLink to={`${list.path}`}
                                    className={({ isActive }) =>
                                        isActive ? 'active' : ""
                                    }
                                >{list.name}</NavLink>
                            </li>
                        ))
                    }
                    {/* render btn based on login activity */}
                    {
                        
                        
                        user && user.role === 'user' ? (
                            <li className='flex items-center gap-3' >
                                <img src={avatarImg} alt="" className='size-8' />
                                <button 
                                onClick={handleLogout}
                                className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'>Logout</button>
                            </li>
                        ) : (<li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>)
                    }

                    {
                        user && user.role === 'admin' && (
                            <li className='flex items-center gap-3'>
                                <img src={avatarImg} alt="" className='size-8' />
                                <Link to='/dashboard'><button className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'>Dashboard</button></Link>
                            </li>
                        )
                    }

                </ul>

                {/* toggle menu */}
                <div className='flex items-center sm:hidden'>
                    <button
                        onClick={toogleMenu}
                        className='flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900'>
                        {
                            isMenuOpen ? <IoClose className='size-6' /> : <IoMenu className='size-6' />
                        }
                    </button>
                </div>
            </nav>

            {/* mobile menu items */}
            {
                isMenuOpen && (
                    <ul className='fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50 '>
                        {
                            navlist.map((list, index) => (
                                <li className='mt-5 px-4' key={index}>
                                    <NavLink
                                        onClick={() => setIsMenuOpen(false)}
                                        to={`${list.path}`}
                                        className={({ isActive }) =>
                                            isActive ? 'active' : ""
                                        }
                                    >{list.name}</NavLink>
                                </li>
                            ))
                        }

                        <li className='mt-5 px-4'>
                            <NavLink to='/login' cla>Login</NavLink>
                        </li>
                    </ul>
                )
            }
        </header>
    )
}

export default navbar

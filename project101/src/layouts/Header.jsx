import React from 'react'
import Logo from '../assets/logo.svg'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation()

    const routes = [
        { name: 'Home', path: '#home' },
        { name: 'Sales', path: '#sales' },
        { name: 'Services', path: '#services' },
        { name: 'Contact Us', path: '#contact' }
    ]

    return (
        <>
            <header className='flex justify-between fixed w-full z-10 top-0 items-center px-20 py-5 bg-white'>

                <div className='flex gap-4 items-center'>
                    <img src={Logo} alt="logo" className='w-16' />
                    <p className='text-xl font-medium'>
                        Techtester<br />
                        Infotech
                    </p>
                </div>

                <menu className='bg-black flex gap-3 rounded-full px-1 py-1'>

                    {
                        routes.map((route, index) => {
                            return (
                                <a className={location.hash === route.path ? 'text-lg bg-[#F9C869] text-black px-8 py-1 rounded-full font-medium transition-all duration-300' : 'text-lg text-[#F9C869] px-8 py-1 font-medium transition-all duration-300'} href={route.path} key={index}>{route.name}</a>
                            )
                        })
                    }

                </menu>

            </header>
        </>
    )
}

export default Header
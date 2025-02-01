import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    let links = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "All-Books",
            link: "/all-books"
        },
        {
            title: "Cart",
            link: "/cart"
        },
        {
            title: "Profile",
            link: "/profile"
        },
        {
            title: "About-Us",
            link: "/about-us"
        }
    ]
    return (
        <div className='flex h-16 justify-between bg-slate-300'>
            <Link to="/">
                <h1 className='mt-3 ml-24 font-semibold text-2xl'>BookShop</h1>
            </Link>
            <div className='flex mt-5'>
                <div className='flex '>
                    {
                        links.map((item, i)=>(
                            <Link to={item.link} key={i} className='pr-5'>
                                {item.title}
                            </Link>
                        ))
                    }
                </div>
                <div>
                    <Link to="/login" className='pr-5 hover:text-red-600 hover:font-semibold'>Login</Link>
                    <Link to="/signup" className='pr-5 hover:text-red-600 hover:font-semibold'>Signup</Link>
                </div>
            </div>
        </div>
    )
}

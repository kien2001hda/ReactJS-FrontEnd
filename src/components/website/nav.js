import React, { useState, useEffect } from 'react'
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom'
import { signOut, isAuthenticated } from '../../api/auth';
const Nav = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false)
    useEffect(() => {
        isAuthenticated() && setIsLogged(true)
    }, [pathname, isLogged])
    return (
        <div>
            <ul className="flex bg-red-500 text-white font-semibold text-xl py-3 ">
                <li><NavLink exact to="/" className="px-4 no-underline text-white" activeClassName="font-bold ">Homepage</NavLink></li>
                <li><NavLink to="/about" className="px-4 no-underline text-white" activeClassName="font-bold ">About</NavLink></li>
                <li><NavLink to="/product" className="px-4 no-underline text-white" activeClassName="font-bold ">Product</NavLink></li>
                {!isLogged && (
                    <>
                        <li><NavLink to="/signin" className="px-4 no-underline text-white" activeClassName="font-bold ">SignIn</NavLink></li>
                        <li><NavLink to="/signup" className="px-4 no-underline text-white" activeClassName="font-bold ">SignUp</NavLink></li>
                    </>
                )}
                {isLogged && (
                    <li><a className="px-4 no-underline text-white"
                        activeClassName="font-bold"
                        style={{ cursor: 'pointer' }}
                        onClick={() => signOut(() => {
                            setIsLogged(false)
                            history.push('/')
                        })} href="/"
                    >SignOut</a></li>
                )}



            </ul>
        </div>
    )
}

export default Nav

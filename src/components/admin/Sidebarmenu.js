import React from 'react'
import { Link } from 'react-router-dom'

const Sidebarmenu = () => {
    return (
        <div>
            <div className="position-sticky pt-3 bg-gray-200 min-h-screen	">
                <ul className="nav flex-column">
                    <Link to="/admin/dashboard" className="ml-14">
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </Link>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/admin/listcategory">
                            <span data-feather="home"></span> Category
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/listproduct">
                            <span data-feather="file"></span> Product
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">
                            <span data-feather="file"></span> DashBoard
                            </Link>
                    </li>


                </ul>

            </div>
        </div>
    )
}

export default Sidebarmenu

import React from 'react'
import { Link } from 'react-router-dom'

const LayoutAdmin = ({ children }) => {
    return (
        <div>
            <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow h-14">
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">H3T AUTO</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-80" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" to="#"></a>
                    </li>
                </ul>
            </div>
            {/* <div className="flex bg-black fex">
                <h1 className="bg-white h-10"></h1>
                <h2 className=" h-14 ml-20"> <Link to="/"><img className="h-14" src="../images/logobe.png" alt /></Link>
                </h2>
                <h3 className="my-auto mx-10"></h3>

            </div> <br /> */}
            <div className="grid grid-cols-5 flex gap-2">
                <div className=" col-span-9">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin

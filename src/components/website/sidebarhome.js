import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = (props) => {
    return (
        <div>
            <div className="sidebar bg-gray-100">
                <div className="h-10 bg-red-400">
                    <span className="leading-10 font-semibold text-white ml-4">Hỗ trợ trực tuyến</span>
                </div>
                <div className="h-14  ml-4 py-1 ">
                    <p className="font-semibold">Tư vấn bán hàng 1</p>
                    <p className="text-xs">Mr: Hoang <span className="text-xs font-bold">(84) 48692 5666</span></p>
                </div>
                <div className="h-14  ml-4 py-1 ">
                    <p className="font-semibold">Tư vấn bán hàng 2</p>
                    <p className="text-xs">Mrs: Linh <span className="text-xs font-bold">(84) 48692 5666</span></p>
                </div>
                <div className="h-22  ml-4 py-1 ">
                    <p className="font-semibold">Email liên hệ</p>
                    <p className="text-xs">Thegioixedep@gmail.com</p>
                </div>
            </div><br />
            <div className="bg-gray-100 ">
                <div className="h-10 bg-red-400">
                    <span className="leading-10 font-semibold text-white ml-4">Sản phẩm nổi bật</span>
                </div>
                {props.products.map((pro, index) => {
                    return (
                        <div key={index} className="  ml-4 py-1 flex">
                            <div className="w-16 h-16 white">
                                <Link to={`/product/${pro._id}`}><img src={pro.photo} alt="" /></Link>

                            </div>
                            <div>
                                <span className="ml-2 font-semibold mt-3"><Link className="hover:text-red-600 text-black no-underline" to={`/product/${pro._id}`}>{pro.name}</Link></span> <br />
                                <span className="text-red-400 text-xl font-semibold ml-2">{pro.price} Đ</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SideBar

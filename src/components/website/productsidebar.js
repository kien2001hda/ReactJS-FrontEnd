import React from 'react'
import { Link } from 'react-router-dom'

const ProductSidebar = (props) => {
    return (
        <div>
            <div className="ml-4 bg-gray-200 min-h-screen">
                <div className="bg-red-500 h-12 ">
                    <span className="text-2xl ml-2 leading-10 text-white">Danh mục sản phẩm</span>
                </div> <br />
                <Link to="/product" className="no-underline font-semibold text-xl hover:text-red-500 text-black ml-10 " >Tất cả sản phẩm</Link>
                {props.categories.map(category => {
                    return (
                        <div className="border-b h-10 leading-10 pl-6 ">
                            <li className="mx-3 block "><Link className="no-underline text-xl font-semibold hover:text-red-500 text-black" to={`/category/${category._id}`}>{category.name}</Link></li>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default ProductSidebar

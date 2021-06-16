import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductSidebar from '../../components/website/productsidebar'

const CategoryPage = (props) => {
    const { id } = useParams()

    return (
        <div>
            <div class="container mx-auto flex grid grid-cols-4 gap-4">
                <div><ProductSidebar {...props} /></div>


                <div class="col-span-3">
                    <div class="border-t-4  border-red-500">
                        <h2 class="text-center font-semibold text-4xl">Sản Phẩm</h2>
                    </div>
                    <div class="h-10 border-t border-black"></div>
                    <div class=" flex grid grid-cols-3 gap-4">
                        {props.products.filter(product => product.category == id).map(product => {
                            return (
                                <div className="bg-gray-100 p-2 rounded-md">
                                    <div className="">
                                        <img className="h-64 object-cover" src={product.photo} />
                                    </div> <br />
                                    <Link to={`/product/${product._id}`} className="hover:text-red-600 text-black no-underline">
                                        <h1 className="text-xl text-center font-semibold ">{product.name}</h1>
                                    </Link>
                                    <h1 className="text-2xl text-red-500 mx-4">{product.price} VNĐ</h1>
                                    <Link to={`/product/${product._id}`} className="mt-4 inline-block bg-blue-500 rounded py-2 px-6 text-white hover:bg-yello-600">Detai</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage


import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    console.log("hihi", props)
    const onHandleRemove = (id) => {
        props.onDelete(id);
    }

    return (
        <div className="ml-4">

            <div className="col-span-3">
                {props.categories.map(cate => {
                    return (
                        <div>
                            <div className="h-10 border-t-4 border-red-400  border-b border-black"><span className="leading-10 text-xl ml-5 font-semibold">{cate.name}</span></div>
                            <br /><div className="container w-100% ">
                                <img className="w-screen" src={cate.photo} alt="" />
                            </div> <br />
                            <div className="text-xl">{cate.description}</div>
                            <div className="grid  grid-cols-3 gap-2 pt-2 ">
                                {props.products.map(pro => {
                                    if (cate._id == pro.category) {
                                        // console.log(pro)
                                        return (
                                            <div className="border hover:border-black col-span-1  ">
                                                <div className=" w-64 max-h-44 mx-auto my-2 ">
                                                    <img className="h-44 object-cover" src={pro.photo} alt="" />
                                                </div>

                                                <span className="ml-3 font-semibold "><Link className="hover:text-red-600 text-black no-underline" to={`/product/${pro._id}`}>{pro.name}</Link></span> <br />
                                                <span className="ml-3 font-semibold text-2xl text-red-600">{pro.price} Đ</span>
                                                <span className="ml-2"><strike>750.000 Đ</strike></span>
                                            </div>
                                        )
                                    }
                                })}
                            </div> <br />
                        </div>
                    )
                })}
            </div>

            {/* hết */}
        </div>
    )
}

export default ProductList

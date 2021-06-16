import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ListProducts = (props) => {
    console.log("nhận vào", props)
    return (
        <div >
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Danh mục</th>
                        <th>Tên sản phẩm</th>
                        <th>Ảnh</th>
                        <th>Giá</th>
                        <th>Mô tả</th>
                        <th>status</th>
                        <th>quantity</th>
                        <th width="200"></th>

                    </tr>
                </thead>
                <tbody>

                    {props.products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                {props.categories.map((categories) => {
                                    if (categories._id == product.category)
                                        return (<td>{categories.name}</td>)
                                })}
                                <td>{product.name}</td>
                                <td><img src={product.photo} width="100" alt="" /></td>
                                <td>{product.price}đ</td>
                                <td>{product.description}</td>
                                <td>{product.status}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <Link to={`/admin/productedit/${product._id}`} className="btn btn-primary">Update</Link>
                                    <button className="btn btn-danger btn-remove ml-2 " onClick={() => props.onDelete(product._id)}>Remove</button>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListProducts

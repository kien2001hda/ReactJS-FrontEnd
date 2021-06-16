import React from 'react'
import { Link } from 'react-router-dom'

const ListCategories = (props) => {
    console.log("độ", props.categories.length)
    return (
        <div>
            <table className="table table-striped table-sm ">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Danh mục</th>
                        <th className="w-80">Mô tả</th>
                        <th>Ảnh</th>
                        <th width="200"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.categories.map((category, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td >{category.name}</td>
                                <td>{category.description} </td>
                                <td><img className="mt-2" src={category.photo} width="300" alt="" /></td>
                                <td>

                                    <Link to={`/admin/categoryedit/${category._id}`} className="btn btn-primary">Update</Link>
                                    <button className="btn btn-danger btn-remove ml-2 " onClick={() => props.onCateDelete(category._id)}>Remove</button>

                                </td>
                            </tr>)
                    })}

                </tbody>

            </table>
        </div>
    )
}

export default ListCategories

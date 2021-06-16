import React from 'react'

const ListUsers = (props) => {
    return (
        <div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th className="w-80">Description</th>
                        <th>Image</th>
                        <th width="200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.categories.map((category, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td >{category.name}</td>
                                <td>{category.description} </td>
                                <td><img className="mt-2" src={category.photo} width="300" alt="" /></td>
                                <td>
                                    <a className="btn btn-primary" href="/#/editproduct/${category._id}">Update</a>
                                    <button className="btn btn-danger btn-remove" data-id="${category._id}">Remove</button>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListUsers

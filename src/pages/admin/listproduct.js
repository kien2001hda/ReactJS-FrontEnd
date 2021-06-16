import React from 'react'
import { Link } from 'react-router-dom'
import ListProducts from '../../components/admin/listproduct'


const ListProduct = (props) => {

    return (
        <div>
            <div className="">
                <div className="grid grid-col-5 mt-5">
                    <h2 className="col-span-1">Danh sách sản phẩm</h2>
                    <div className="col-start-5 ml-52"><Link className="btn btn-primary" to="/admin/productadd">Add Product</Link></div>

                </div>

                <div>

                    {/* ${await ListProduct.render()} */}
                    <ListProducts {...props} />

                </div>
            </div>
        </div >
    )
}

export default ListProduct



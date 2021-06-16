import React from 'react'
import { Link } from 'react-router-dom'
import ListCategories from '../../components/admin/listcategory'


const ListCategory = (props) => {

    return (
        <div>
            <div className="">
                <div className="grid grid-col-5 mt-5">
                    <h2 className="col-span-1">Danh sách danh mục</h2>
                    <div className="col-start-5 ml-52"><Link className="btn btn-primary" to="/admin/categoryadd">Add Category</Link></div>

                </div>

                <div>
                    {/* ${await ListProduct.render()} */}
                    <ListCategories {...props} />

                </div>
            </div>
        </div >
    )
}

export default ListCategory
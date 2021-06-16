import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CategoryAPI from '../../api/categoryAPI';

const CategoryAdd = () => {
    const { register, handleSubmit, formState: { error } } = useForm();
    const history = useHistory();

    const onSubmit = async (data) => {

        // console.log(data);
        // console.log(data.name);
        try {
            await CategoryAPI.add(data);
            history.push("/admin/listcategory");

        } catch (error) {
            console.log(error.response.data.error);

        }

    }
    return (
        <div>
            <div className="container">
                <h1>Thêm danh mục mới</h1>
                <form className="row g-3" id="form-add" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Tên Danh Mục</label>
                        <input type="text" className="form-control" id="product-name" {...register("name")} placeholder="Nhập tên danh mục" />
                    </div> <br />
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Description</label>
                        <textarea name className="form-control" id="category-description" cols={300} rows={10} {...register("description")} placeholder="Mô tả sản phẩm" defaultValue={""} />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Ảnh Danh muc</label>
                        <input type="file" placeholder="Ảnh Sản Phẩm" id="product-image" />
                    </div>
                    <div className="col-12">
                        <button type="submit" value="Add category" className="btn btn-primary">Add</button>
                        <Link className="btn btn-primary ml-4" to="/admin/listcategory">Quay lai</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CategoryAdd

import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { Link, useHistory, useParams } from 'react-router-dom'
import CategoryAPI from '../../api/categoryAPI';

const CategoryEdit = ({ onCateUpdate, props }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const [category, setCategories] = useState({});
    let { id } = useParams();
    useEffect(() => {
        const getCategories = async () => {
            try {
                const { data } = await CategoryAPI.get(id);
                setCategories(data)
                reset(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();
    }, [])
    const onHandleSubmit = async (item) => {
        if (item != "") {
            const category = {
                ...item,
                name: document.querySelector("#category-name").value,
            };
            await onCateUpdate(id, category);
            history.push("/admin/listcategory");
            // console.log('running');
        }
    }
    return (
        <div>
            <div className="container">
                <h1 className="ml-20 mt-10">Sửa Danh Mục </h1>
                <form id="form-add" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="row g-3 mb-3">
                        <div className="col-md-6">
                            <label htmlFor="category-name" className="form-label">Tên danh mục</label>
                            <input type="text" className="form-control" id="category-name" defaultValue={category.name} {...register('name', { required: true })} />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="category-description" className="form-label">Mô tả</label>
                            <input type="text" className="form-control" id="category-description" defaultValue={category.description} {...register('description', { required: true })} />
                        </div>


                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Update</button>
                            <Link className="btn btn-primary ml-4" to="/admin/listcategory">Quay lai</Link>
                        </div>


                    </div></form>

            </div>
        </div>
    )
}

export default CategoryEdit

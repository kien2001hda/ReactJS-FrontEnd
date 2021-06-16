import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { Link, useHistory, useParams } from 'react-router-dom'
import ProAPI from '../../api/ProAPI';

const ProductEdit = ({ onUpdate, props }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const [product, setProduct] = useState({});
    let { id } = useParams();
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await ProAPI.get(id);
                setProduct(data)
                reset(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, [])
    const onHandleSubmit = async (item) => {

        if (item != "") {
            const product = {
                ...item,
                name: document.querySelector("#product-name").value,
            };
            await onUpdate(id, product);
            history.push("/admin/listproduct");
            // console.log('running');
        }
    }
    return (
        <div className="container">
            <h1 className="ml-20 mt-10">Sửa sản phẩm </h1>
            <form id="form-add" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <label htmlFor="product-name" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="product-name" defaultValue={product.name} {...register('name', { required: true })} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="product-price" className="form-label">Price</label>
                        <input type="text" className="form-control" id="product-price" defaultValue={product.price} {...register('price', { required: true })} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="product-description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="product-description" defaultValue={product.description} {...register('description', { required: true })} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="product-quantity" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="product-quantity" defaultValue={product.quantity} {...register('quantity', { required: true })} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="product-status" className="form-label">Status</label>
                        <input type="text" className="form-control" id="product-status" defaultValue={product.status} {...register('status', { required: true })} /> <br />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <Link className="btn btn-primary ml-4" to="/admin/listproduct">Quay lai</Link>
                    </div>


                </div></form>

        </div>
    )
}

export default ProductEdit

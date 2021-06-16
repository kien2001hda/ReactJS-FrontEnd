import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import ProAPI from '../../api/ProAPI';
import firebase from '../../firebase';

const ProductAdd = (props) => {
    console.log(props);
    const { register, handleSubmit, formState: { error } } = useForm();
    const history = useHistory();

    const onSubmit = async (data) => {

        try {
            const file = data.photo[0]
            let storeRef = firebase.storage().ref(`images/${file.name}`);
            storeRef.put(file).then((e) => {
                storeRef.getDownloadURL().then(async (url, e) => {
                    console.log(url);
                    const newData = {
                        ...data,
                        photo: url
                    }
                    props.addproducts(newData)
                    history.push("/admin/listproduct");
                });
            });


        } catch (error) {
            console.log(error.response.data.error);

        }

    }
    return (
        <div>
            <div className="container">
                <h1 className="ml-20 mt-10">Thêm sản phẩm mới</h1>
                <form className="row g-3" id="form-add" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Tên sản phẩm</label>
                        <input type="text" className="form-control" placeholder="Nhập tên sản phẩm" id="product-name" {...register("name")} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Giá sản phẩm</label>
                        <input type="text" className="form-control" placeholder="Nhập giá sản phẩm" id="product-price" {...register("price")} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputAddress3" className="form-label">Chi tiết sản phẩm</label>
                        <input type="text" className="form-control" placeholder="Nhập thông tin mô tả sản phẩm" id="product-description" {...register("description")} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Trạng thái</label>
                        <input type="text" className="form-control" id="product-status" placeholder="True or false" {...register("status")} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Số lượng</label>
                        <input type="text" className="form-control" placeholder="Nhập số lượng" id="product-quantity" placeholder="Number" {...register("quantity")} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Danh mục</label>
                        <select id="product_categoryId" className="form-control" {...register("category")}>
                            {props.categories.map((cate) => {
                                return (<option value={cate._id}>{cate.name}</option>)
                            })}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Ảnh sản phẩm</label>
                        <input type="file" placeholder="Ảnh Sản Phẩm" id="product-image" {...register("photo")} />
                    </div>
                    <div className="col-12">
                        <button type="submit" value="Add product" className="btn btn-primary">ADD</button>
                        <Link className="btn btn-primary ml-4" to="/admin/listproduct">Quay lai</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ProductAdd

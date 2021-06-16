import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProAPI from '../../api/ProAPI';

const DetailProducts = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    console.log(id);
    useEffect(() => {
        const callProduct = async () => {
            try {
                const { data } = await ProAPI.get(id);
                console.log("dât", data);
                setProduct(data)
            } catch (error) {
            }
        }
        callProduct()
    }, [])
    console.log("thoong tin", product);
    return (
        <div>
            <div>
                <div className="h-10" />
                <div className="h-10" />
                <div className="container mx-auto">
                    <div className="grid grid-cols-5 gap-8 ">
                        <div className="col-span-2 ">
                            <div className="w-100%">
                                <img src={product.photo} className="w-screen	" alt />
                            </div>
                            <div className="grid grid-cols-4 gap-2 mt-2">
                                <img src={product.photo} alt />
                                <img src={product.photo} alt />
                                <img src={product.photo} alt />
                                <img src={product.photo} alt />
                            </div>
                        </div>
                        <div className=" col-span-3">
                            <h1 className="text-7xl font-semibold">{product.name}</h1> <br />
                            <span className="text-4xl font-bold">{product.price} VNĐ</span> <br /> <br /> <br />
                            <select className="border border-red-700 w-40 h-10 font-semibold text-xl px-5">
                                <option>Size M</option>
                                <option>Size L</option>
                                <option>Size XL</option>
                            </select> <br />
                            <br /> <br />
                            <input className="border border-red-700 h-10 w-14 text-xl font-bold px-2" type="number" defaultValue={1} min={1} max={100} step={1} />
                            <button className="bg-red-600 ml-10 h-10 w-40 font-semibold text-2xl text-white rounded-md">Add to cart</button>
                            <br /> <br /> <br />
                            <span className="text-2xl font-semibold">Product Details</span> <br /><br />
                            <p className="mr-40  text-xl"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, sequi. Corporis quis, impedit error ad iste necessitatibus fugiat doloribus, magni aut ducimus ratione, praesentium debitis mollitia eum at nam odit!
        </p> <br />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailProducts

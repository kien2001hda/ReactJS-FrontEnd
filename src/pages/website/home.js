import React from 'react'
import ProductList from '../../components/website/ProductList'
import SideBar from '../../components/website/sidebarhome'
// lat vao toi sua cho..cho  b nao loi kho hon 
const HomePage = (props) => {
    return (
        <>
            <div className="container w-100%">
                <img className="w-screen" src="../images/banner2.png" alt="" />
            </div>
            <h1 className="text-4xl"></h1>
            <div className="grid grid-cols-12">
                <div className="col-span-3"><SideBar {...props} /></div>
                <div className="col-span-9">   <ProductList  {...props} /></div>
            </div>
        </>

    )
}

export default HomePage




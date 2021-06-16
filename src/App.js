import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import Routes from './routes';
import ProAPI from './api/ProAPI'
import categoryAPI from './api/categoryAPI'
import { Router } from 'react-router';
import CategoryAPI from './api/categoryAPI';


function App() {

  const [products, setProducts] = useState([]); //1
  // const [category, setCategory] = useState([]); //1

  const [categories, setCategories] = useState([]);
  useEffect(() => { //3
    const fetchData = async () => {
      try {
        // nêú thành công
        const { data: product } = await ProAPI.getAll();
        console.log(product)
        setProducts(product);
      } catch (error) {
        // nếu thất bại 
        console.log(error)
      }
    }
    fetchData();
  }, [])

  useEffect(() => { //3
    const fetchData = async () => {
      try {
        // nêú thành công
        const { data: category } = await categoryAPI.getAll();
        // console.log(category)
        setCategories(category);
      } catch (error) {
        // nếu thất bại 
        console.log(error)
      }
    }
    fetchData();
  }, [])

  const addProducts = async (data) => {
    console.log("new", data);
    await ProAPI.add(data);
    setProducts([...products, data])
  }
  const addcategory = async (data) => {
    console.log("new", data);
    await CategoryAPI.add(data);
    setCategories([...categories, data])
  }
  const editProduct = async (product, id) => {
    try {
      const data = await ProAPI.update(product, id);
      console.log(data);
      const newProduct = products.map((item) =>
        item._id == product._id ? product : item
      );
      setProducts(newProduct, data);
    } catch (error) {
      console.log(error);
    }
  };
  const editCategory = async (category, id) => {
    try {
      const data = await ProAPI.update(category, id);
      console.log(data);
      const newCategory = categories.map((item) =>
        item._id == category._id ? category : item
      );
      setCategories(newCategory);
    } catch (error) {
      console.log(error);
    }
  };


  const removeItem = async (id) => {
    try {
      await ProAPI.remove(id);
      const newProducts = products.filter(product => product._id != id);
      setProducts(newProducts)
    } catch (error) {

    }


  }
  const removeCategory = async (id) => {
    try {
      await CategoryAPI.remove(id);
      const newCategory = categories.filter(category => category._id != id);
      setCategories(newCategory)
    } catch (error) {

    }


  }

  return ( //2

    <div className="container mx-auto">
      <Routes
        addproducts={addProducts}
        products={products} onDelete={removeItem} onUpdate={editProduct}
        categories={categories} onCateDelete={removeCategory} onCateUpdate={editCategory}

      /> <br /> <br />

    </div>


  );
}

export default App;

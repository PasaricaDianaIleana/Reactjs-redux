import React, { useEffect } from 'react';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions'
const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await
            axios.get("https://fakestoreapi.com/products")
                .catch((err) => {
                    console.log(err)
                })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log(products)
    return (
        <div className=" grid container ui ">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;
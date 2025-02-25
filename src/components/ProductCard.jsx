import React from "react";
import { FaInfoCircle, FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    console.log(dispatch);

    return (
        <div className="container bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded-md mb-4" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">₹ {product.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
            </div>
            <Link to={`/product/${product.id}`}  className="absolute bottom-4 right-4 flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-all">
                View Details
            </Link>
        </div>
    );
};

export default ProductCard;

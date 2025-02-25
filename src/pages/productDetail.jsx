import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice"; 

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((state) => state.product.products);

    const product = products?.find((p) => p.id === Number(id));

    if (!product) {
        return <div className="text-center text-gray-600 text-xl py-10">Product not found.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row p-8 gap-8">

                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img src={product.image} alt={product.name} className="w-96 h-96 object-cover rounded-lg border" />
                </div>


                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-4xl font-extrabold text-gray-800">{product.name}</h1>
                    <p className="text-lg text-gray-600 mt-2 leading-relaxed">{product.description}</p>

                    <div className="mt-6 space-y-3">
                        <p className="text-lg"><span className="font-semibold text-gray-800">Category:</span> {product.category}</p>
                        <p className="text-2xl font-bold text-blue-600">₹{product.price.toFixed(2)}</p>
                        <p className="text-lg">
                            <span className="font-semibold text-gray-800">Stock:</span> 
                            <span className={`ml-2 ₹{product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                                {product.stock > 0 ? `₹{product.stock} available` : "Out of Stock"}
                            </span>
                        </p>
                        <p className="text-lg"><span className="font-semibold text-gray-800">Rating:</span> ⭐ {product.rating} / 5</p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button 
                            onClick={() => dispatch(addToCart(product))} 
                            className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg w-full shadow-md hover:bg-red-600 transition">
                            Add to Cart
                        </button>
                        <button 
                            onClick={() => navigate('/shop')} 
                            className="px-6 py-3 bg-gray-500 text-white text-lg font-semibold rounded-lg w-full shadow-md hover:bg-gray-600 transition">
                            Back to Shop
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

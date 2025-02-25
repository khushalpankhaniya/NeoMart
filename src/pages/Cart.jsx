import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart, decreaseQuantity, increaseQuantity } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.products || []);

  const [address, setAddress] = useState("Main Street, 3/A");

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-lg">Your cart is empty.</p>
          <Link to="/shop" className="text-red-600 font-semibold hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-4 md:p-6">
            <div className="hidden md:grid grid-cols-6 text-gray-700 font-semibold border-b pb-3">
              <p className="col-span-2">Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
              <p>Remove</p>
            </div>

            {cartItems.map((product) => (
              <div key={product.id} className="grid grid-cols-1 md:grid-cols-6 items-center border-b py-4 text-gray-600 gap-4">
                {/* Product Image & Name */}
                <div className="md:col-span-2 flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                  <h3 className="font-medium">{product.name}</h3>
                </div>


                <p className="text-center md:text-left">₹{product.price.toFixed(2)}</p>


                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                    className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() => dispatch(increaseQuantity(product.id))}
                    className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <p className="text-center md:text-left">₹{(product.quantity * product.price).toFixed(2)}</p>
                <button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className="text-red-500 hover:text-red-700 text-lg flex justify-center"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Cart Total</h3>

            <div className="flex justify-between text-gray-700 mb-2">
              <span className="font-medium">Total Items:</span>
              <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span className="font-medium">Shipping:</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-gray-900 text-lg font-semibold border-t pt-3">
              <span>Total Price:</span>
              <span>
                ₹
                {cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full mt-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

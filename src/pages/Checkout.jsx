import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart);

    const [orderData, setOrderData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "Credit Card",
    });

    const handleChange = (e) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        console.log("Order Placed:", orderData);
        navigate("/order-confirmation", {
            state: { orderData, cartItems },
        });
    };

    return (
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-10">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <div className="grid lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

                    <form className="space-y-4" onSubmit={handlePlaceOrder}>
                        <div>
                            <label className="block text-gray-700 font-medium">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={orderData.fullName}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-md"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={orderData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-md"
                                placeholder="example@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={orderData.phone}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-md"
                                placeholder="123456789"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Shipping Address</label>
                            <input
                                type="text"
                                name="address"
                                value={orderData.address}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-md"
                                placeholder="123 Main St, City, Country"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Payment Method</label>
                            <select
                                name="paymentMethod"
                                value={orderData.paymentMethod}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-md"
                            >
                                <option>Credit Card</option>
                                <option>PayPal</option>
                                <option>Cash on Delivery</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                            Place Order
                        </button>
                    </form>
                </div>

                <div className="order-summary bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                    <div className="space-y-4">
                        {cartItems?.products?.map((product) => (
                            <div key={product.id} className="flex items-center justify-between border-b pb-2">
                                <div className="flex items-center">
                                    <img src={product.image} alt="Product" className="w-16 h-16 object-cover rounded-md" />
                                    <div className="ml-4">
                                        <p className="text-gray-800 font-medium">{product.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-700">Qty: <span className="font-medium">{product.quantity}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between text-gray-900 text-lg font-semibold border-t pt-3 mt-3">
                        <span>Total Price:</span>
                        <span>₹{cartItems?.totalPrice.toFixed(2)}</span>
                    </div>

                    <button onClick={() => navigate('/cart')} className="w-full mt-4 bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400">
                        Edit Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
    
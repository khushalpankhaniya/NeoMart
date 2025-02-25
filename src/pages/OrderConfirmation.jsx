import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "../Invoice/InvoicePDF";

const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const { orderData, cartItems } = location.state || {};

    if (!orderData || !cartItems) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-3xl font-bold text-red-600">No Order Found</h1>
                <button onClick={() => navigate('/')} className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md">
                    Go to Home
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
            <div className="bg-white shadow-lg rounded-lg p-10 text-center">
                <h1 className="text-3xl font-bold text-green-600">🎉 Order Confirmed!</h1>
                <p className="text-lg text-gray-700 mt-2">
                    Thank you, <span className="font-bold">{orderData.fullName}</span>, for your purchase.
                </p>    

                <div className="mt-6 bg-gray-100 rounded-lg p-6 text-left">
                    <h2 className="text-xl font-semibold text-gray-800">📦 Order Details</h2>
                    <div className="grid grid-cols-2 gap-4 mt-3 text-gray-700">
                        <p><strong>Name:</strong> {orderData.fullName}</p>
                        <p><strong>Email:</strong> {orderData.email}</p>
                        <p><strong>Phone:</strong> {orderData.phone}</p>
                        <p><strong>Address:</strong> {orderData.address}</p>
                        <p><strong>Payment Method:</strong> {orderData.paymentMethod}</p>
                    </div>
                </div>

                <div className="mt-6 bg-gray-100 rounded-lg p-6 text-left">
                    <h2 className="text-xl font-semibold text-gray-800">🛒 Order Summary</h2>
                    <div className="mt-3">
                        <div className="grid grid-cols-3 font-semibold border-b pb-2 text-gray-800">
                            <p>Product</p>
                            <p className="text-center">Quantity</p>
                            <p className="text-right">Price</p>
                        </div>
                        {cartItems.products.map((product) => (
                            <div key={product.id} className="grid grid-cols-3 py-3 border-b text-gray-700">
                                <p>{product.name}</p>
                                <p className="text-center">{product.quantity}</p>
                                <p className="text-right font-semibold">₹{(product.price * product.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between text-lg font-semibold border-t pt-3 mt-3">
                        <span>Total Price:</span>
                        <span>₹{cartItems.totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                <div className="flex justify-between mt-6">
                    <button onClick={() => navigate('/')} className="px-4 py-2 bg-red-500 text-white rounded-md">
                        Return to Home
                    </button>

                    <PDFDownloadLink 
                        document={<InvoicePDF orderData={orderData} cartItems={cartItems} />} 
                        fileName="invoice.pdf"
                        className="px-4 py-2 bg-gray-500 text-white rounded-md">
                        {({ loading }) => (loading ? "Generating..." : "Download Bill")}
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;

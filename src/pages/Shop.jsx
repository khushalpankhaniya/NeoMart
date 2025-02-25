import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { categories } from "../assets/Data";
import { useState } from "react";

const Shop = () => {
    const products = useSelector((state) => state.product.products);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);

    const resetFilters = () => {
        setSelectedCategory("All");
        setSearchQuery("");
        setMinPrice(0);
        setMaxPrice(100000);
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        return matchesCategory && matchesSearch && matchesPrice;
    });

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>

        
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-1/5 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"/>

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full md:w-1/4 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 outline-none">
                    <option value="All">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <div className="w-full md:w-1/5 p-4 border border-gray-300 rounded-md">
                    <label className="block font-semibold mb-2">Price Range</label>
                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                        <span>₹ {minPrice}</span>
                        <span>₹ {maxPrice}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="w-full accent-gray-500"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full accent-gray-500"
                    />
                </div>

                <button
                    onClick={resetFilters}
                    className="px-4 py-3 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-200">
                    Reset Filters
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Shop;

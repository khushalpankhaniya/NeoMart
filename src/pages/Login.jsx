const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                        />
                    </div>
                    <button className="w-full bg-red-500 text-white font-semibold py-3 rounded-md hover:bg-red-600 transition duration-200">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <a href="/signup" className="text-red-500 font-semibold">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

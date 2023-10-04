import { useState } from 'react';
import {AiOutlineGoogle} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here, e.g., send data to the server
    };

    return (
        <div className="bg-gray-300 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-gray-700 text-white font-semibold rounded py-2 hover:bg-gray-900 transition-all"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-4">
                    <button
                        className="w-full bg-blue-500 text-white font-semibold rounded py-2 hover:bg-blue-600 transition-all flex justify-center items-center"
                    >
                        <AiOutlineGoogle className=' text-2xl me-2'></AiOutlineGoogle>
                        Sign in with Google
                    </button>
                </div>
                <p className=' mt-3 text-sm'>Don't have an account? <Link  className=' text-gray-800 font-bold' to='/registration'>Registration</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;

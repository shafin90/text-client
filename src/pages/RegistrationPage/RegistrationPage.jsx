import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../component/AuthProvider/AuthProvider';

const RegistrationPage = () => {
    const { setName, setEmail, setPassword, setConfirmPassword, setImg, setNumber, handleRegistration } = useContext(authContext);
    
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        setImg(file); // Set the selected image in the state
    };
    
    return (
        <div className="bg-gray-300 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Registration</h2>
                <form onSubmit={handleRegistration}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={e => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            onChange={e => setNumber(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={e => setConfirmPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />

                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-gray-700 text-white font-semibold rounded py-2  hover:bg-gray-900 transition-all"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className=' mt-3 text-sm'>Already have an account? <Link className=' text-gray-800 font-bold' to='/registration'>Login</Link></p>
            </div>

        </div>
    );
};

export default RegistrationPage;

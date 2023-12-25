import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../component/AuthProvider/AuthProvider';

const RegistrationPage = () => {
    const { setProfileImg, setName, setEmail, setPassword, setConfirmPassword, setNumber, handleRegistration, userinfo, counter, notifyError, notifyLengthError, registrationError } = useContext(authContext);

    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [file, setFile] = useState(null);

    useEffect(() => {
        // Navigate user to application page when registration is done
        if (userinfo !== null) {
            navigate('/');
        }
    }, [counter])

    const handleFile = async event => {
        setFile(
            URL.createObjectURL(event.target.files[0])
        );
        
        try {
            const formData = new FormData();
            formData.append('file', file);
      
            // Replace 'YOUR_GCS_UPLOAD_ENDPOINT' with the actual endpoint for uploading to Google Cloud Storage
            const response = await axios.post('YOUR_GCS_UPLOAD_ENDPOINT', formData);
      
            // Assuming the response includes the public URL of the uploaded image
            setProfileImg(response.data.publicUrl);
      
            console.log('Image uploaded successfully. URL:', response.data.publicUrl);
          } catch (error) {
            console.error('Error uploading image:', error);
          }
        

    };

    return (
        <div className="bg-gray-300 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-8 rounded shadow-md w-96 my-24">
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
                            placeholder='first name'
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
                            placeholder='01*********'
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
                            placeholder='abc@gmail.com'
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
                            placeholder='must be at least 6 digits'

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
                            placeholder='must be at least 6 digits'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Upload Image</label>
                        <input
                            type="file"
                            name="image"
                            required="required"
                            onChange={handleFile}

                        />

                    </div>
                    <p className={notifyError ? " text-sm text-red-900" : " hidden"}>
                        Password doesnt match
                    </p>

                    <p className={notifyLengthError ? " text-sm text-red-900" : " hidden"}>
                        Password length cannot be less than 6
                    </p>

                    <p className={registrationError ? " text-sm text-red-900" : " hidden"}>
                        having some issues. Try again
                    </p>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-gray-700 text-white font-semibold rounded py-2  hover:bg-gray-900 transition-all"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className=' mt-3 text-sm'>Already have an account? <Link className=' text-gray-800 font-bold' to='/login'>Login</Link></p>
            </div>

        </div>
    );
};

export default RegistrationPage;

// This component contains profile image of loggedIN user and logout button
import { useContext } from 'react';
import { BiLogOut } from 'react-icons/bi'
import { authContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';

const ProfileAndLogout = () => {
    const { handleLogOut, logOutConfirm, loggedInUserInfo } = useContext(authContext);
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Initialize useNavigate Hook.
    const navigate = useNavigate();

    // Redirect to the login page when user complete logout process.
    if (logOutConfirm) {
        navigate('/login')
    }

    return (
        <div className=' flex justify-between items-center w-10/12 mx-auto  relative bottom-4 '>
            {/* Profile image of loggedIN user and user's name */}
            <div className=' flex justify-between items-center'>
                <img onClick={onOpen} src={loggedInUserInfo?.img} alt="profile-pic" className=" w-9 h-9 rounded-full cursor-pointer  border-2 border-white" />
                <p className=' text-slate-300 ms-3'>{loggedInUserInfo?.name}</p>
            </div>

            {/* logout button */}
            <button className=' hover:bg-red-800 p-2 rounded-md' onClick={handleLogOut}>
                <BiLogOut className=' text-slate-400 text-2xl'></BiLogOut>
            </button>


            <Modal  blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                
                <ModalContent className=" bg-gray-700 text-slate-300 w-screen h-screen flex justify-center items-center">
                    
                    
                    <ModalBody className=' flex flex-col justify-center items-center'>
                        <h1 className=' text-4xl font-bold text-center'>{loggedInUserInfo?.name}</h1>
                        <h2 className=' text-xl font-semibold text-center mb-3'>{loggedInUserInfo?.email}</h2>
                        <img src={loggedInUserInfo?.img} className=' w-40 h-40 rounded-full border-4 border-slate-300 ' alt="" />
                        
                    </ModalBody>

                    <ModalFooter>
                        <Button className=' px-4 py-2 bg-slate-300 text-slate-800 rounded-md mt-3' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ProfileAndLogout;
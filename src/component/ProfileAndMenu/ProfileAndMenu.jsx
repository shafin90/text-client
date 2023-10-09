// This component contains profile picture and a menu-bar
import React, { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { authContext } from '../AuthProvider/AuthProvider';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button
} from '@chakra-ui/react'

const ProfileAndMenu = () => {
    const { to } = useContext(authContext);//Retrieve user's information to whom user send message
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div className={to == null ? ' hidden' : ' flex justify-between items-center w-full h-24 px-10'}>
            <div className=' flex justify-between items-center'>
                <img src={to?.img} alt="profile" className="rounded-full border-2 border-black w-9 h-9" />
                <p className=' ms-3 font-bold'>{to?.name}</p>
            </div>
            <GiHamburgerMenu ref={btnRef} colorScheme='teal' onClick={onOpen} className=' cursor-pointer text-2xl'></GiHamburgerMenu>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent className=' w-screen h-screen bg-gray-800 text-slate-300 flex justify-center items-center'>

                    <DrawerHeader>
                        <h1 className=' text-5xl font-bold mb-2'>{to?.name}</h1>
                        <h3 className=' text-slate-300 mb-5 text-center'>{to?.email}</h3>
                    </DrawerHeader>

                    <DrawerBody>
                        <img src={to?.img} className=' w-52 h-52 rounded-full border-4 border-slate-300 mb-4' alt="" />

                    </DrawerBody>

                    <DrawerFooter>
                        <Button className=" bg-slate-300 text-slate-800 rounded-md px-6 py-2" mr={3} onClick={onClose}>
                            Cancel
                        </Button>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>

    );
};

export default ProfileAndMenu;
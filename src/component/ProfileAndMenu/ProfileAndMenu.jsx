// This component contains profile picture and a menu-bar
import { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { authContext } from '../AuthProvider/AuthProvider';

const ProfileAndMenu = () => {
    const { to } = useContext(authContext);//Retrieve user's information to whom user send message

    return (
        <div className={to==null?' hidden':' flex justify-between items-center w-full h-24 px-10'}>
            <div className=' flex justify-between items-center'>
                <img src={to?.img} alt="profile" className="rounded-full border-2 border-black w-9 h-9" />
                <p className=' ms-3 font-bold'>{to?.name}</p>
            </div>
            <GiHamburgerMenu className=' cursor-pointer text-2xl'></GiHamburgerMenu>
        </div>
    );
};

export default ProfileAndMenu;
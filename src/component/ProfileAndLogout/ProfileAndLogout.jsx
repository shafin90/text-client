// This component contains profile image of loggedIN user and logout button
import { BiLogOut } from 'react-icons/bi'

const ProfileAndLogout = () => {

    return (
        <div className=' flex justify-between items-center w-10/12 mx-auto  '>
            {/* Profile image of loggedIN user */}
            <img src="" alt="profile-pic" className=" w-6 h-6 rounded-full " />
            
            {/* logout button */}
            <button className=' hover:bg-red-800 p-2 rounded-md'>
                <BiLogOut className=' text-slate-400 text-2xl'></BiLogOut>
            </button>
        </div>
    );
};

export default ProfileAndLogout;
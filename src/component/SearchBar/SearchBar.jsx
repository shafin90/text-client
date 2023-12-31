// This component contains input field and an icon to search friend

import { useContext, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { authContext } from '../AuthProvider/AuthProvider';
import { useStatStyles } from '@chakra-ui/react';

const SearchBar = () => {
    const {  setSearchInput } = useContext(authContext);
    // State declaration for this component========================
  
    return (
        <div className="flex items-center  bg-slate-200  w-10/12 p-2 rounded-md mt-4 mx-auto">
            <input
                type="text"
                placeholder="Search by phone number"
                className="flex-grow border-none bg-slate-200 outline-none  px-2"
                onChange={e => setSearchInput(e.target.value)}
            />
            <FaSearch />

        </div>
    );
};

export default SearchBar;

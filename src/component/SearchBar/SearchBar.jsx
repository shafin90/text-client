// This component contains input field and an icon to search friend

import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="flex items-center  bg-slate-200  w-10/12 p-2 rounded-md mt-4 mx-auto">
            <input
                type="text"
                placeholder="Search..."
                className="flex-grow border-none bg-slate-200 outline-none  px-2"
            />
            <FaSearch />

        </div>
    );
};

export default SearchBar;

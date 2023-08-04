import React, { useState } from "react";
import TextIcon from "./TextIcon";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchComponentProps {
    className?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ className }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearchClick = () => {
      // You can perform the search logic here
      console.log(`Searching for: ${searchTerm}`);
    };
  
    return (

        <div className={`mt-1 relative${className} input input-bordered w-full max-w`}>
            <label htmlFor="Search" className="sr-only"> Search </label>

            <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-md text-neutral-900 border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            />

        </div>
    );
  };
  
  export default SearchComponent;
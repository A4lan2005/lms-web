import Search from '@/src/assests/send.png';
import { useState } from 'react';
import { Link } from '@tanstack/react-router';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative mb-8 flex justify-center">
      <div className="flex w-full min-w-lg items-center rounded-full border border-[#9FACCE] bg-white px-4 py-3 shadow-sm">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type to search..."
          className="flex-1 border-none outline-none"
        />

        <Link to="/index/LmsScreen" search={{ query: searchQuery }}>
          <button
            disabled={!searchQuery}
            className={`ml-2 p-1 ${
              !searchQuery ? 'opacity-50' : 'hover:opacity-80'
            }`}
          >
            <img src={Search} alt="search" className="h-6 w-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;

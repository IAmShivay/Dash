import { Search } from "lucide-react";

const SearchBar = () => {
  return (
      <div className="relative w-full max-w-2xl"> {/* Set max width on inner div */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 h-6 w-6" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-black"
        />
    </div>
  );
};

export default SearchBar;

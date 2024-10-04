import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-5">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 h-5 w-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-black text-black"
        />
      </div>
    </div>
  );
};

export default SearchBar;

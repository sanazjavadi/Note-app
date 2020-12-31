import React from "react";

//assets
import SearchIcon from '../../svg/MagnifiyingGlass'

function Index(props) {
  return (
    <div className="text-center font-bold border col-span-3">
      <div class="p-8">
        <div class="bg-white flex items-center  rounded-full relative">
          <input
            class="rounded-full border-2 w-full py-2 px-6 text-gray-500 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />

          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4 w-4 h-4"
          >
          <SearchIcon fill="grey"/>
          </button>
        </div>
      </div>

      <div className="py-7 pl-3 border-l-4 border-red-600 rounded-sm bg-red-300 mx-2 text-white text-left">
        gg
      </div>
    </div>
  );
}

export default Index;

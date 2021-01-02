import React from 'react';

// assets
import SearchIcon from '../../svg/MagnifiyingGlass';

const Index: React.FC = () => {
    return (
        <div className="text-center col-span-3 border-theme">
            <div className="p-8">
                <div className="flex items-center rounded-3xl  rounded-full relative ">
                    <input
                        className="focus:outline-none  app-input  w-full rounded-full py-3 px-6 "
                        id="search"
                        type="text"
                        placeholder="Search"
                    />

                    <button type="submit" className="absolute right-0 top-0 mt-4 mr-4 w-4 h-4">
                        <SearchIcon className="app-svg" />
                    </button>
                </div>
            </div>

            <div className="py-7 pl-3 rounded-sm  mx-2 edit-list text-left">gg</div>
        </div>
    );
};

export default Index;

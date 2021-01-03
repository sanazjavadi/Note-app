import React from 'react';

const Index: React.FC = () => {
    return (
        <div className="bg-gray-400 top-5 -left-8 p-4 rounded-lg flex flex-col text-xs font-bold text-gray-600 absolute z-10">
            <div className="hover:opacity-50">Delete</div>
            <div className="mt-3 hover:opacity-50">Duplicate</div>
            <div className="mt-3 hover:opacity-50">Copy link</div>
            <div className="mt-3 hover:opacity-50">Rename</div>
        </div>
    );
};

export default Index;

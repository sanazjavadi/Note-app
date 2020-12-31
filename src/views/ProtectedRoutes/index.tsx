import React from 'react';

// components
import Sidebar from '../../components/Sidebar';
import Notes from '../../components/Notes';
import Editor from '../../components/Editor';

const Index: React.FC = () => {
    return (
        <div className="w-full">
            <div className="w-full grid grid-cols-12 gap-0">
                <Sidebar />
                <Notes />
                <Editor />
            </div>
        </div>
    );
};

export default Index;

import React from 'react';

// components
import Sidebar from '../../components/Sidebar';
import Notes from '../../components/Notes';
import Editor from '../../components/Editor';

const Index: React.FC = () => {
    return (
        <>
            <Sidebar />
            <Notes />
            <Editor />
        </>
    );
};

export default Index;

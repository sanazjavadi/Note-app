/* eslint-disable react/prop-types */
import React from 'react';

const Index: React.FC<Iprops> = ({ note }) => {
    return <div className="py-7 pl-3 rounded-lg  mx-2 edit-list text-left mt-2 w-11/12">{note.title}</div>;
};

export default Index;

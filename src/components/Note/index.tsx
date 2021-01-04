/* eslint-disable react/prop-types */
import React from 'react';

type Iprops = {
    page: Array;
};

const Index: React.FC<Iprops> = ({ page }) => {
    return <div className="py-7 pl-3 rounded-lg  mx-2 edit-list text-left mt-2">{page}</div>;
};

export default Index;

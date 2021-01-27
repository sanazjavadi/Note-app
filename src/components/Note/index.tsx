/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteNote } from '../../reducers/notes';

// assets
import Cancel from '../../svg/Cancel';

type Iprops = {
    note: {
        _id: number;
        title: string;
    };
};

const Index: React.FC<Iprops> = ({ note }) => {
    const dispatch = useDispatch();

    return (
        <div className="py-7 pl-3 rounded-lg  mx-2 edit-list text-left mt-2 w-11/12 relative">
            <Cancel
                className="absolute top-3 right-3 w-3 h-3 cursor-pointer"
                onClick={() => dispatch(DeleteNote(note._id))}
            />
            {note.title}
        </div>
    );
};

export default Index;

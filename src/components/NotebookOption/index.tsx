/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteNoteBook, duplicateNote } from '../../reducers/notebooks';

type Iprops = {
    id: number;
};

const Index: React.FC<Iprops> = ({ id }) => {
    const dispatch = useDispatch();

    return (
        <div className="top-5 options-list -left-8 p-4 rounded-lg flex flex-col text-xs font-bold absolute z-10">
            <span className="hover:opacity-50" onClick={() => dispatch(DeleteNoteBook(id))}>
                Delete
            </span>
            <div className="mt-3 hover:opacity-50" onClick={() => dispatch(duplicateNote(id))}>
                Duplicate
            </div>
            <div
                className="mt-3 hover:opacity-50"
                onClick={() => navigator.clipboard.writeText('Copy this text to clipboard')}
            >
                Copy link
            </div>
            <div className="mt-3 hover:opacity-50">Rename</div>
        </div>
    );
};

export default Index;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { closeNoteModal } from '../../reducers/modal';
import { createNote } from '../../reducers/notes';

// assets
import CloseIcon from '../../svg/Cancel';

type Iprops = {
    id: number;
    name: string;
};

const Index: React.FC<Iprops> = ({ id, name }) => {
    const dispatch = useDispatch();
    const txtArea = useInput('');

    const handleClick = () => {
        const data = {
            title: txtArea.value,
            data: '',
            description: '',
        };
        dispatch(closeNoteModal());
        dispatch(createNote({ id, data }));
    };

    return (
        <div className="relative mx-auto w-10/12 h-5/12 sm:w-7/12 md:w-6/12 lg:w-4/12  bg-white z-11 mt-32 rounded-2xl p-6">
            <CloseIcon
                className="w-5 h-5 absolute right-5 top-5 cursor-pointer"
                onClick={() => dispatch(closeNoteModal())}
            />

            <p className="text-left text-lg text-gray-800">add inside page</p>
            <p className="text-left text-sm text-gray-800 mt-4 pl-4">add to {name}</p>

            <div className="w-full flex flex-col items-center justify-center">
                <textarea
                    placeholder="untitled"
                    className="py-3 px-4 w-10/12 rounded-lg mt-8 app-input focus:outline-none"
                    value={txtArea.value}
                    onChange={txtArea.onChange}
                />
                <p className="cursor-pointer text-gray-800 opacity-50 mt-1 text-left w-10/12">add cover</p>
                <button type="button" className="mt-5 rounded-lg app-btn-outline py-2 px-6" onClick={handleClick}>
                    add new note
                </button>
            </div>
        </div>
    );
};

export default Index;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeNotebookModal } from '../../reducers/modal';
import { addNewNote } from '../../reducers/notebooks';

// assets
import CloseIcon from '../../svg/Cancel';

const Index: React.FC = () => {
    const dispatch = useDispatch();
    const [title, settitle] = useState('');
    const addNotebookHandler = (e) => {
        e.preventDefault();

        const data = {
            id: Math.floor(Math.random() * 100),
            title,
            pages: [],
        };

        dispatch(closeNotebookModal());
        dispatch(addNewNote(data));
        settitle('');
    };

    return (
        <div className="relative mx-auto w-3/12 h-5/12 bg-white z-11 mt-32 rounded-2xl pb-6">
            <CloseIcon
                className="w-5 h-5 absolute right-5 top-5 cursor-pointer"
                onClick={() => dispatch(closeNotebookModal())}
            />

            <div className="flex items-center justify-between">
                <div className="mb-5 w-7/12 h-16 relative">
                    <img
                        src="https://www.flaticon.com/svg/static/icons/svg/2891/2891837.svg"
                        alt=""
                        className="absolute w-7/12 -top-6 left-7"
                    />
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <input
                    type="text"
                    placeholder="add New Note"
                    className="py-3 px-4 w-10/12 rounded-full mt-8 app-input focus:outline-none"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                />

                <button
                    type="button"
                    className="mt-5 rounded-full  py-2 px-6 app-btn-outline"
                    onClick={addNotebookHandler}
                >
                    add notebook
                </button>
            </div>
        </div>
    );
};

export default Index;

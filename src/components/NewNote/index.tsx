import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModalNote } from '../../reducers/modal';
// assets
import CloseIcon from '../../svg/Cancel';

const Index: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div className="relative mx-auto w-3/12 h-5/12 bg-white z-11 mt-32 rounded-2xl pb-6">
            <CloseIcon
                className="w-5 h-5 absolute right-5 top-5 cursor-pointer"
                onClick={() => dispatch(closeModalNote())}
            />

            <div className="flex items-center justify-between">
                <div className="mb-5 w-7/12 h-16 relative">
                    <img
                        src="https://www.flaticon.com/svg/static/icons/svg/2891/2891837.svg"
                        alt=""
                        className="absolute w-7/12 -top-6 left-7"
                    />
                </div>

                {/* <p className="text-left text-red-900 p-7 mt-5"> add note</p> */}
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <input
                    type="text"
                    placeholder="add New Note"
                    className="py-3 px-4 w-10/12 rounded-full mt-8 app-input focus:outline-none"
                />

                <button
                    type="button"
                    className="mt-5 rounded-full border-4 border-gray-600 bg-white text-gray-900 py-2 px-6"
                >
                    add new note
                </button>
            </div>
        </div>
    );
};

export default Index;

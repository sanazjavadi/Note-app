import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { closeNotebookModal } from '../../reducers/modal';
import { CreateNoteBook } from '../../reducers/notebooks';

// assets
import CloseIcon from '../../svg/Cancel';

const AddNotebook: React.FC = () => {
    const dispatch = useDispatch();
    const title = useInput('');
    const addNotebookHandler = (e) => {
        e.preventDefault();
        const data = {
            name: title.value,
        };

        dispatch(closeNotebookModal());
        dispatch(CreateNoteBook(data));
        title.setValue('');
    };

    return (
        <div className="relative mx-auto md:w-5/12 lg:h-5/12  xl:w-3/12 sm:w-6/12 w-9/12 bg-white z-11 mt-32 rounded-2xl pb-6 ">
            <CloseIcon
                className="w-3 h-3 absolute right-5 top-5 cursor-pointer"
                onClick={() => dispatch(closeNotebookModal())}
            />

            <div className="w-full flex flex-col items-center justify-center pt-5">
                <input
                    type="text"
                    placeholder="add New Notebook"
                    className="py-3 px-4 w-10/12 rounded-full mt-8 app-input focus:outline-none"
                    value={title.value}
                    onChange={title.onChange}
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

export default AddNotebook;

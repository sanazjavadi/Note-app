/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { openNoteModal } from '../../reducers/modal';
import { getNotes } from '../../reducers/notes';
import { setCurrentNoteBookId } from '../../reducers/notebooks';

// components
import NotebookOption from '../NotebookOption';

// assets
import PlusIcon from '../../svg/Plus';
import MenuIcon from '../../svg/Menu';

type Iprops = {
    notebook: {
        _id: number;
        name: string;
    };
};

const Index: React.FC<Iprops> = ({ notebook }) => {
    const { _id, name } = notebook;
    const dispatch = useDispatch();

    const addNotebookHandler = () => {
        dispatch(openNoteModal());
        dispatch(setCurrentNoteBookId({ id: _id, name }));
    };
    return (
        <>
            <li
                key={_id}
                className="mt-2 py-3 px-3 relative
                 rounded-lg transition-opacity 
                 mx-2 flex justify-between
                 cursor-pointer hover:bg-opacity-50 duration-500"
            >
                <span
                    className="w-full"
                    role="button"
                    tabIndex={-1}
                    onKeyDown={() => dispatch(getNotes(_id))}
                    onClick={() => dispatch(getNotes(_id))}
                >
                    {name}
                </span>

                <div className="flex items-center relative ">
                    <span className="options">
                        <MenuIcon className="w-4 h-4 app-svg mr-2 hover:opacity-50" />
                        <div className="notebook-options">
                            <NotebookOption id={_id} name={name} />
                        </div>
                    </span>
                    <PlusIcon className="w-4 h-4 app-svg  hover:opacity-50" onClick={addNotebookHandler} />
                </div>
            </li>
        </>
    );
};

export default Index;

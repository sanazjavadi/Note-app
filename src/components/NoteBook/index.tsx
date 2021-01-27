/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
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
    };
    const getNotBookHandler = () => {
        dispatch(getNotes(_id));
        dispatch(setCurrentNoteBookId({ id: _id, name }));
    };
    return (
        <>
            <li
                key={_id}
                className="mt-2 py-3 px-3 relative rounded-lg transition-opacity mx-2 flex justify-between cursor-pointer hover:bg-opacity-50 duration-500"
                onClick={getNotBookHandler}
            >
                {name}
                <div className="flex items-center relative ">
                    <span className="options">
                        <MenuIcon className="w-4 h-4 app-svg mr-2 hover:opacity-50" />
                        <div className="notebook-options">
                            <NotebookOption id={_id} />
                        </div>
                    </span>
                    <PlusIcon className="w-4 h-4 app-svg  hover:opacity-50" onClick={addNotebookHandler} />
                </div>
            </li>
        </>
    );
};

export default Index;

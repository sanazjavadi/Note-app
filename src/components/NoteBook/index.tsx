/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNoteModal } from '../../reducers/modal';
import { getNotes } from '../../reducers/notes';
import { setCurrentNoteBookId, notebooksState } from '../../reducers/notebooks';

// components
import NotebookOption from '../NotebookOption';

// styles
import styles from './styles/notebook.module.scss';

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
    const { currentNoteBook } = useSelector(notebooksState);
    const addNotebookHandler = () => {
        dispatch(openNoteModal());
        dispatch(setCurrentNoteBookId({ id: _id, name }));
    };

    const getNotebookHandler = () => {
        dispatch(getNotes(_id));
        dispatch(setCurrentNoteBookId({ id: _id, name }));
    };
    return (
        <>
            <li
                key={_id}
                className={`${currentNoteBook.id === notebook._id ? styles['notebook-list-active'] : ''} ${
                    styles['notebook-list']
                } mt-2 py-3 px-3 relative
                rounded-lg transition-opacity 
                mx-2 flex justify-between
                cursor-pointer`}
            >
                <span
                    className="w-full"
                    role="button"
                    tabIndex={-1}
                    onKeyDown={getNotebookHandler}
                    onClick={getNotebookHandler}
                >
                    {name}
                </span>

                <div className="flex items-center relative">
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

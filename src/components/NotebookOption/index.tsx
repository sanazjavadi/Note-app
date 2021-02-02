/* eslint-disable react/prop-types */

import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteNoteBook, duplicateNote, setCurrentNoteBookId, getNoteBooks } from '../../reducers/notebooks';
import { openEditModal } from '../../reducers/modal';

// Interfaces
import { INotebookOption } from './NotebookOption';

// styles
import styles from './styles/NotebookOption.module.scss';

const NotebookOption: React.FC<INotebookOption.IProps> = ({ id, name }) => {
    const dispatch = useDispatch();

    const updateNote = () => {
        dispatch(openEditModal());
        dispatch(setCurrentNoteBookId({ id, name }));
    };
    const deleteNoteHandler = () => {
        dispatch(DeleteNoteBook(id));
        dispatch(getNoteBooks());
    };
    return (
        <div className={`${styles['options-list']} top-5 -left-9 p-3 rounded-lg flex flex-col text-xs absolute z-10`}>
            <span
                className="hover:opacity-50"
                role="button"
                tabIndex={-1}
                onKeyDown={() => dispatch(DeleteNoteBook(id))}
                onClick={deleteNoteHandler}
            >
                Delete
            </span>
            <div
                className="mt-3 hover:opacity-50"
                role="button"
                tabIndex={-1}
                onKeyDown={() => dispatch(duplicateNote(id))}
                onClick={() => dispatch(duplicateNote(id))}
            >
                Duplicate
            </div>
            <div
                className="mt-3 hover:opacity-50"
                role="button"
                tabIndex={-1}
                onKeyDown={updateNote}
                onClick={updateNote}
            >
                Rename
            </div>
        </div>
    );
};

export default NotebookOption;

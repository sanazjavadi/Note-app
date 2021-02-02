/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNoteModal } from '../../reducers/modal';
import { getNotes, notesState, setCurrentNote } from '../../reducers/notes';
import { setCurrentNoteBookId, notebooksState } from '../../reducers/notebooks';

// Interfaces
import { INoteBook } from './NoteBook';

// components
import NotebookOption from '../NotebookOption';

// styles
import styles from './styles/notebook.module.scss';

// assets
import PlusIcon from '../../svg/Plus';
import MenuIcon from '../../svg/Menu';
import NextIcon from '../../svg/Next';
import DownIcon from '../../svg/Down';

const NoteBook: React.FC<INoteBook.IProps> = ({ notebook }) => {
    const { _id, name } = notebook;
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState(false);
    const { currentNoteBook } = useSelector(notebooksState);
    const { notes } = useSelector(notesState);
    const addNotebookHandler = () => {
        dispatch(openNoteModal());
        dispatch(setCurrentNoteBookId({ id: _id, name }));
    };

    const getNotebookHandler = () => {
        dispatch(getNotes(_id));
        dispatch(setCurrentNoteBookId({ id: _id, name }));
    };
    return (
        <div key={_id}>
            <li
                key={_id}
                className={`${currentNoteBook.id === notebook._id ? styles['notebook-list-active'] : ''} ${
                    styles['notebook-list']
                } mt-2 p-3 relative
                rounded-lg 
                mx-2 flex justify-between
                cursor-pointer`}
            >
                <span
                    className="w-full flex items-center"
                    role="button"
                    tabIndex={-1}
                    onKeyDown={getNotebookHandler}
                    onClick={getNotebookHandler}
                >
                    {dropdown ? (
                        <DownIcon
                            className={`app-svg w-5 h-5 pr-2 ${styles['drop-svg']}`}
                            onClick={() => setDropdown(false)}
                        />
                    ) : (
                        <NextIcon
                            className={`app-svg w-5 h-5 pr-2 ${styles['drop-svg']}`}
                            onClick={() => setDropdown(true)}
                        />
                    )}

                    {name}
                </span>

                <div className="flex items-center relative">
                    <span className={styles.options}>
                        <MenuIcon className="w-4 h-4 app-svg mr-2 hover:opacity-50" />
                        <div className={styles['notebook-options']}>
                            <NotebookOption id={_id} name={name} />
                        </div>
                    </span>
                    <PlusIcon className="w-4 h-4 app-svg  hover:opacity-50" onClick={addNotebookHandler} />
                </div>
            </li>
            {currentNoteBook.id === _id && dropdown && (
                <div className={` mt-1 mx-2 rounded-lg cursor-pointer ${styles['mobile-notes']}`}>
                    {notes?.map((note) => (
                        <p
                            className="p-3 w-full"
                            onKeyDown={() => dispatch(setCurrentNote(note))}
                            onClick={() => dispatch(setCurrentNote(note))}
                        >
                            {note.title}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NoteBook;

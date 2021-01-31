/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentNote, DeleteNote, notesState } from '../../reducers/notes';

// styles
import styles from './styles/note.module.scss';

// assets
import Cancel from '../../svg/Cancel';

type Iprops = {
    note: {
        _id: number;
        title: string;
        description: string;
    };
};

const Index: React.FC<Iprops> = ({ note }) => {
    const dispatch = useDispatch();
    const { currentNote } = useSelector(notesState);
    const selectorNote = currentNote._id === note._id ? 'edit-list-active' : 'edit-list';
    return (
        <div
            key={note._id}
            role="button"
            tabIndex={-1}
            onKeyDown={() => dispatch(setCurrentNote(note))}
            className={`${styles[selectorNote]} note-list`}
            onClick={() => dispatch(setCurrentNote(note))}
        >
            <Cancel
                className="absolute top-3 right-3 w-3 h-3 cursor-pointer app-svg z-10"
                onClick={() => dispatch(DeleteNote(note._id))}
            />
            <span>{note.title}</span>

            <p className="text-sm mt-5">
                {note.description.length > 20 ? `${note.description.substr(0, 20)}...` : note.description}
            </p>
        </div>
    );
};

export default Index;

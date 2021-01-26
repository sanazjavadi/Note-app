/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openNoteModal, modalState } from '../../reducers/modal';
import { getNotes } from '../../reducers/notes';

// components
import NotebookOption from '../NotebookOption';
import AddNewnote from '../AddNewnote';
import Modal from '../Modal';

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
    const { noteModal } = useSelector(modalState);
    const dispatch = useDispatch();

    const addNotebookHandler = () => {
        dispatch(openNoteModal());
    };
    return (
        <>
            <li
                key={_id}
                className="mt-2 py-3 px-3 relative rounded-lg transition-opacity mx-2 flex justify-between cursor-pointer hover:bg-opacity-50 duration-500"
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
            {noteModal && (
                <Modal>
                    <AddNewnote id={_id} name={name} />
                </Modal>
            )}
        </>
    );
};

export default Index;

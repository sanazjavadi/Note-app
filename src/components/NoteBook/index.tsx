/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openNoteModal, modalState } from '../../reducers/modal';

// components
import NotebookOption from '../NotebookOption';
import AddNewnote from '../AddNewnote';
import Modal from '../Modal';

// assets
import PlusIcon from '../../svg/Plus';
import MenuIcon from '../../svg/Menu';

type Iprops = {
    notebook: {
        id: any;
        title: string;
    };
};

const Index: React.FC<Iprops> = ({ notebook }) => {
    const { id, title } = notebook;
    const { noteModal } = useSelector(modalState);
    const [addId, setaddId] = useState(null);
    const dispatch = useDispatch();

    const addNotebookHandler = () => {
        dispatch(openNoteModal());
        setaddId(id);
    };
    return (
        <>
            <li
                key={id}
                className="mt-2 py-3 px-3 relative rounded-lg transition-opacity mx-2 flex justify-between cursor-pointer hover:bg-opacity-50 duration-500 "
            >
                {title}
                <div className="flex items-center relative ">
                    <span className="options">
                        <MenuIcon className="w-4 h-4 app-svg mr-2 hover:opacity-50" />
                        <div className="notebook-options">
                            <NotebookOption id={id} />
                        </div>
                    </span>
                    <PlusIcon className="w-4 h-4 app-svg  hover:opacity-50" onClick={addNotebookHandler} />
                </div>
            </li>
            {noteModal && (
                <Modal>
                    <AddNewnote id={addId} />
                </Modal>
            )}
        </>
    );
};

export default Index;

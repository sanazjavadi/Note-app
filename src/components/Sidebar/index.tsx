/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../reducers/theme';
import { modalState, openNotebookModal, openNoteModal } from '../../reducers/modal';

// components
import Modal from '../Modal';
import AddNewNoteBook from '../AddNotebook';
import NotebookOption from '../NotebookOption';
import AddNewnote from '../AddNewnote';

// assets
import Avatar from '../../svg/User';
import AddIcon from '../../svg/Add';
import SignOutIcon from '../../svg/SignOut';
import PalletIcon from '../../svg/ColorWheel';
import PlusIcon from '../../svg/Plus';
import MenuIcon from '../../svg/Menu';

const Index: React.FC = () => {
    const dispatch = useDispatch();
    const { notebookModal, noteModal } = useSelector(modalState);
    const [optionOpen, setoptionOpen] = useState(false);
    return (
        <div className="col-span-2  h-screen flex flex-col">
            <div className="flex flex-col justify-center items-center border-b-1 pb-3 border-grey-100 mt-5">
                <div className="w-10 h-10  border-gray-100 rounded-full overflow-hidden ">
                    <Avatar className="app-svg" />
                </div>
                <p className="font-momo text-base text-center mt-2">sanaz javadi</p>
            </div>
            <div className="notebook-list mt-3">
                <ul>
                    <li className="py-3 px-3 rounded-lg transition-opacity mx-2 flex justify-between cursor-pointer hover:bg-opacity-50 duration-500 ">
                        first list
                        <div className="flex items-center relative ">
                            <span onMouseOver={() => setoptionOpen(true)} onMouseLeave={() => setoptionOpen(false)}>
                                <MenuIcon className="w-4 h-4 app-svg mr-2 hover:opacity-50" />
                                {optionOpen && <NotebookOption />}
                            </span>
                            <PlusIcon
                                className="w-4 h-4 app-svg  hover:opacity-50"
                                onClick={() => dispatch(openNoteModal())}
                            />
                        </div>
                    </li>
                </ul>
            </div>

            <div className="mt-auto mb-5 border-t-3 border-grey-300">
                <div
                    className=" px-4 relative pallet-buttom"
                    role="button"
                    tabIndex={-1}
                    onKeyDown={() => dispatch(changeTheme())}
                    onClick={() => dispatch(changeTheme())}
                >
                    <PalletIcon className="w-7 h-7 cursor-pointer add-theme" />
                    <div className="bg-gray-800 w-6 h-6 rounded-full palet"> </div>
                    <div className="w-6 h-6 bg-green-800 rounded-full palet" />
                    <div className="w-6 h-6 bg-yellow-100 rounded-full palet" />
                    <div className="w-6 h-6 bg-blue-800	rounded-full palet" />
                    <div className="w-6 h-6 bg-purple-800 rounded-full palet" />
                </div>
                <div className="flex justify-between items-center px-5 pt-4 items-end ">
                    <SignOutIcon className="w-6 h-6 cursor-pointer app-svg" />
                    <AddIcon
                        className="w-12 h-12 cursor-pointer app-svg"
                        onClick={() => dispatch(openNotebookModal())}
                    />
                </div>
            </div>
            {notebookModal && (
                <Modal>
                    <AddNewNoteBook />
                </Modal>
            )}

            {noteModal && (
                <Modal>
                    <AddNewnote />
                </Modal>
            )}
        </div>
    );
};

export default Index;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWindows from '../../hooks/useWindowsSize';
import { changeTheme } from '../../reducers/theme';
import { modalState, openNotebookModal } from '../../reducers/modal';
import { notebooksState, getNoteBooks } from '../../reducers/notebooks';
import { userState } from '../../reducers/auth';

// components
import Modal from '../Modal';
import AddNewNoteBook from '../AddNotebook';
import NoteBook from '../NoteBook';

// styles
import styles from './styles/sidebar.module.scss';

// assets
import Avatar from '../../svg/User';
import AddIcon from '../../svg/Add';
import SignOutIcon from '../../svg/SignOut';
import PalletIcon from '../../svg/Pallete';

const Index: React.FC = () => {
    const dispatch = useDispatch();
    const { notebookModal } = useSelector(modalState);
    const noteBooks = useSelector(notebooksState);
    const { user } = useSelector(userState);
    const size = useWindows();
    const getNotBookes = () => {
        dispatch(getNoteBooks());
    };
    useEffect(() => getNotBookes(), [noteBooks]);

    return (
        <>
            <div
                className={`${styles['bg-sidebar']} ${
                    size > 900
                        ? 'xl:col-span-2 lg:col-span-3 sm:col-span-3 flex h-screen flex flex-col border-theme'
                        : styles.mobileSide
                }`}
            >
                <div className="flex flex-col justify-center items-center border-b-1 pb-3 border-grey-100 mt-5">
                    <div className="w-10 h-10 rounded-full overflow-hidden ">
                        <Avatar className="app-svg" />
                    </div>
                    <p className="font-momo text-base text-center mt-2">{user.name}</p>
                </div>
                <div className="mt-3 notebook-list">
                    <ul className={size < 900 ? styles['notebook-list'] : ''}>
                        {noteBooks.length ? (
                            noteBooks.map((notebook) => <NoteBook notebook={notebook} />)
                        ) : (
                            <li>No NoteBooks yet</li>
                        )}
                    </ul>
                </div>

                <div className="mt-auto mb-5 border-t-3 border-grey-300 ">
                    {size > 900 && (
                        <div
                            className="relative pallet-buttom mb-3 px-4 app-svg"
                            role="button"
                            tabIndex={-1}
                            onKeyDown={() => dispatch(changeTheme())}
                            onClick={() => dispatch(changeTheme())}
                        >
                            <PalletIcon className="w-7 h-7 cursor-pointer add-theme" />
                            <div className="bg-gray-700 w-6 h-6 rounded-full palet" />
                            <div className="w-6 h-6 rounded-full palet" />
                            <div className="w-6 h-6 rounded-full palet" />
                            <div className="w-6 h-6 rounded-full palet" />
                            <div className="w-6 h-6 rounded-full palet" />
                        </div>
                    )}

                    <div
                        className={
                            size > 900 ? `flex justify-between items-center px-4 pt-4` : styles['bottom-sidebar']
                        }
                    >
                        <SignOutIcon
                            className="w-7 h-7 cursor-pointer app-svg mb-3"
                            onClick={() => localStorage.removeItem('token')}
                        />
                        <AddIcon
                            className="w-9 h-9 cursor-pointer app-svg mb-3 "
                            onClick={() => dispatch(openNotebookModal())}
                        />
                    </div>
                </div>

                {notebookModal && (
                    <Modal>
                        <AddNewNoteBook />
                    </Modal>
                )}
            </div>
        </>
    );
};

export default Index;

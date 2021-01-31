/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWindows from '../../hooks/useWindowsSize';
import { changeTheme } from '../../reducers/theme';
import { modalState, openNotebookModal } from '../../reducers/modal';
import { notebooksState, getNoteBooks } from '../../reducers/notebooks';
import { userState, signOut } from '../../reducers/auth';

// components
import Modal from '../Modal';
import AddNewNoteBook from '../AddNotebook';
import AddNewnote from '../AddNewnote';
import EditModal from '../EditNoteBook';
import NoteBook from '../NoteBook';

// styles
import styles from './styles/sidebar.module.scss';

// assets
import Avatar from '../../svg/User';
import AddIcon from '../../svg/Add';
import SignOutIcon from '../../svg/SignOut';
import PalletIcon from '../../svg/Pallete';
import Loading from '../../svg/Loading';

const Index: React.FC = () => {
    const dispatch = useDispatch();
    const { notebookModal, noteModal, editModal } = useSelector(modalState);
    const { notebooks, loading } = useSelector(notebooksState);
    const { user } = useSelector(userState);
    const size = useWindows();
    const getNotBookes = () => {
        dispatch(getNoteBooks());
    };
    useEffect(() => getNotBookes(), []);

    return (
        <>
            <div
                className={`${styles['bg-sidebar']} ${
                    size > 900 ? 'h-screen flex flex-col border-theme fixed' : styles.mobileSide
                }`}
            >
                <div className="flex flex-col justify-center items-center border-b-1 pb-3 border-grey-100 mt-5">
                    <div className="w-10 h-10 rounded-full overflow-hidden ">
                        <Avatar className="app-svg" />
                    </div>
                    <p className="text-sm md:text-base text-center mt-2">{user.name}</p>
                </div>
                <div className="mt-3 overflow-y-auto h-3/5">
                    <ul className={size < 900 ? styles['notebook-list'] : ''}>
                        {!loading ? (
                            notebooks.length ? (
                                notebooks.map((notebook) => <NoteBook notebook={notebook} />)
                            ) : (
                                <div className="w-full flex justify-center items-center text-xs">
                                    You have no Notebook yet !
                                </div>
                            )
                        ) : (
                            <div className="w-full flex justify-center items-center">
                                <Loading className="app-svg" />
                            </div>
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
                            className="lg:w-7 lg:h-7 cursor-pointer app-svg mb-3 w-5 h-5"
                            onClick={() => dispatch(signOut())}
                        />
                        <AddIcon
                            className="lg:w-9 lg:h-9 cursor-pointer app-svg mb-3 w-6 h-6"
                            onClick={() => dispatch(openNotebookModal())}
                        />
                    </div>
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
            {editModal && (
                <Modal>
                    <EditModal />
                </Modal>
            )}
        </>
    );
};

export default Index;

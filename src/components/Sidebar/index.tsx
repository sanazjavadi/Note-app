import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../reducers/theme';
import { modalState, openNotebookModal } from '../../reducers/modal';
import { notebooksState } from '../../reducers/notebooks';

// components
import Modal from '../Modal';
import AddNewNoteBook from '../AddNotebook';
import Notebook from '../NoteBook';

// assets
import Avatar from '../../svg/User';
import AddIcon from '../../svg/Add';
import SignOutIcon from '../../svg/SignOut';
import PalletIcon from '../../svg/ColorWheel';

const Index: React.FC = () => {
    const dispatch = useDispatch();
    const { notebookModal } = useSelector(modalState);
    const noteBooks = useSelector(notebooksState);

    return (
        <>
            <div className="col-span-3 lg:flex xl:col-span-2 md:hidden hidden  h-screen flex flex-col">
                <div className="flex flex-col justify-center items-center border-b-1 pb-3 border-grey-100 mt-5">
                    <div className="w-10 h-10  border-gray-100 rounded-full overflow-hidden ">
                        <Avatar className="app-svg" />
                    </div>
                    <p className="font-momo text-base text-center mt-2">sanaz javadi</p>
                </div>
                <div className="notebook-list mt-3">
                    <ul>
                        {noteBooks?.map((notebook?: any) => (
                            <Notebook notebook={notebook} key={notebook.id} />
                        ))}
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
                        <div className="bg-gray-700 w-6 h-6 rounded-full palet" />
                        <div className="w-6 h-6 bg-green-700 rounded-full palet" />
                        <div className="w-6 h-6 bg-yellow-100 rounded-full palet" />
                        <div className="w-6 h-6 bg-blue-700	rounded-full palet" />
                        <div className="w-6 h-6 bg-purple-700 rounded-full palet" />
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
            </div>
        </>
    );
};

export default Index;

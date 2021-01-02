import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../reducers/theme';
import { openModalNote, selectModal } from '../../reducers/modal';

// components
import Modal from '../Modal';
import NewNote from '../NewNote';

// assets
import Avatar from '../../svg/User';
import EditIcon from '../../svg/Edit';
import AddIcon from '../../svg/Add';
import SignOutIcon from '../../svg/SignOut';
import PalletIcon from '../../svg/ColorWheel';

const Index: React.FC = () => {
    const dispatch = useDispatch();
    const { noteModal } = useSelector(selectModal);

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
                    <li className="py-3 px-5  bg-red-200 rounded-sm transition-opacity mx-2 flex justify-between cursor-pointer hover:bg-opacity-50 duration-500 ">
                        first list
                        <EditIcon className="w-5 h-5 app-svg" />
                    </li>
                    <li className="py-3 px-5  bg-purple-200 transition-opacity rounded-sm	mx-2 flex justify-between cursor-pointer hover:bg-opacity-50 mt-3 duration-500">
                        first list
                        <EditIcon className="w-5 h-5 app-svg" />
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
                    <AddIcon className="w-12 h-12 cursor-pointer app-svg" onClick={() => dispatch(openModalNote())} />
                </div>
            </div>
            {noteModal && (
                <Modal>
                    <NewNote />
                </Modal>
            )}
        </div>
    );
};

export default Index;

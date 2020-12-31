import React from 'react';

// assets
import Avatar from '../../svg/User';
import EditIcon from '../../svg/Edit';
import AddIcon from '../../svg/Add';
import SignOutIcon from '../../svg/SignOut';
import PalletIcon from '../../svg/ColorWheel';

const Index: React.FC = () => {
    return (
        <div className="border col-span-2  h-screen flex flex-col">
            <div className="flex flex-col justify-center items-center border-b-1 pb-3 border-grey-100 mt-5">
                <div className="w-10 h-10 border-4 border-gray-100 rounded-full overflow-hidden">
                    <Avatar />
                </div>
                <p className="font-momo text-base text-center mt-2">sanaz javadi</p>
            </div>
            <div className="notebook-list mt-3">
                <ul>
                    <li className="py-3 px-5  bg-red-200 rounded-sm transition-opacity		mx-2 flex justify-between cursor-pointer hover:bg-opacity-50 duration-500">
                        first list
                        <EditIcon className="w-5 h-5" fill="grey" />
                    </li>
                    <li className="py-3 px-5  bg-purple-200 transition-opacity	 rounded-sm	mx-2 flex justify-between cursor-pointer hover:bg-opacity-50 mt-3 duration-500">
                        first list
                        <EditIcon className="w-5 h-5" fill="grey" />
                    </li>
                </ul>
            </div>

            <div className="mt-auto mb-5 border-t-3 border-grey-300">
                <div className=" px-4 relative pallet-buttom">
                    <PalletIcon className="w-7 h-7 cursor-pointer add-theme" />
                    <div className="bg-gray-800 w-6 h-6 rounded-full palet"> </div>
                    <div className="w-6 h-6 bg-green-800 rounded-full palet" />
                    <div className="w-6 h-6 bg-yellow-100 rounded-full palet" />
                    <div className="w-6 h-6 bg-blue-800	rounded-full palet" />
                    <div className="w-6 h-6 bg-purple-800 rounded-full palet" />
                </div>
                <div className="flex justify-between items-center px-5 pt-4 items-end ">
                    <SignOutIcon className="w-6 h-6 cursor-pointer" fill="grey" />
                    <AddIcon className="w-12 h-12 cursor-pointer" fill="grey" />
                </div>
            </div>
        </div>
    );
};

export default Index;

import * as React from 'react';
import { useSelector } from 'react-redux';
import { notebooksState } from '../../reducers/notebooks';

// components
import Notebook from '../NoteBook';

// styles
import styles from './styles/mobileSide.module.scss';

// assets
import Avatar from '../../svg/User';
import AddIcon from '../../svg/Add';
import SignOutIcon from '../../svg/SignOut';
import PalletIcon from '../../svg/ColorWheel';

const Index: React.FC = () => {
    const noteBooks = useSelector(notebooksState);
    return (
        <div className={`h-screen fixed top-0 flex flex-col ${styles.mobileSide}`}>
            <div className="flex flex-col justify-center items-center border-b-1 pb-3 border-grey-100 mt-5">
                <div className="w-10 h-10  border-gray-100 rounded-full overflow-hidden ">
                    <Avatar className="app-svg" />
                </div>
            </div>
            <div>
                <ul className={styles['notebook-list']}>
                    {noteBooks?.map((notebook?: any) => (
                        <Notebook notebook={notebook} key={notebook.id} />
                    ))}
                </ul>
            </div>

            <div className="mt-auto border-t-3 border-grey-300">
                <div
                    className="relative pallet-buttom flex items-center justify-center  mb-5 "
                    // role="button"
                    // tabIndex={-1}
                    // onKeyDown={() => dispatch(changeTheme())}
                    // onClick={() => dispatch(changeTheme())}
                >
                    <PalletIcon className="w-7 h-7 cursor-pointer add-theme" />
                </div>
                <div className={styles['bottom-sidebar']}>
                    <AddIcon
                        className="w-8 h-8 cursor-pointer app-svg mb-5"
                        // onClick={() => dispatch(openNotebookModal())}
                    />
                    <SignOutIcon
                        className="w-6 h-6 cursor-pointer app-svg mb-5"
                        onClick={() => localStorage.removeItem('token')}
                    />
                </div>
            </div>
        </div>
    );
};
export default Index;

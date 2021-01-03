import React from 'react';
import { useDispatch } from 'react-redux';
import { closeNoteModal } from '../../reducers/modal';

// assets
import CloseIcon from '../../svg/Cancel';

const Index: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div className="relative mx-auto w-5/12 h-5/12 bg-white z-11 mt-32 rounded-2xl pb-6">
            <CloseIcon
                className="w-5 h-5 absolute right-5 top-5 cursor-pointer"
                onClick={() => dispatch(closeNoteModal())}
            />

            <p>add page inside</p>
            <p>add to first</p>
        </div>
    );
};

export default Index;

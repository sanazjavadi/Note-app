/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openOptionsModal, modalState } from '../../reducers/modal';
import { notesState } from '../../reducers/notes';
import createNewEditor from '../../utils/createNewEditor';
import { uploadImage } from '../../utils';
import Modal from '../Modal';
import EditOptions from '../EditOptions';

// styles
import '../../styles/editor.css';

// assets
import OptionsIcon from '../../svg/Option';

const Index: React.FC = () => {
    const [editor, setEditor] = useState({});
    const dispatch = useDispatch();
    const { optionsModal } = useSelector(modalState);
    const { currentNote } = useSelector(notesState);

    const addCoverHandler = async (e) => {
        const file = e.target.files[0];

        if (file) {
            uploadImage(file);
        }
    };

    useEffect(() => {
        if (editor && editor.isReady) {
            editor.isReady.then(() => editor.destroy());
        }
        if (currentNote._id) {
            setEditor(createNewEditor(currentNote.data));
        }
    }, [currentNote.data]);
    return (
        <div className="text-center font-bold xl:col-span-7 lg:col-span-7 md:col-sm-7 h-auto col-sm-8">
            <div className="editor">
                <div className="w-full note-cover">
                    <label htmlFor="add-cover">
                        <img
                            className="object-cover w-full h-full"
                            src={
                                currentNote.cover
                                    ? currentNote.cover
                                    : 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
                            }
                            alt="cover"
                        />
                    </label>
                    {currentNote._id && (
                        <input id="add-cover" className="hidden" type="file" onChange={(e) => addCoverHandler(e)} />
                    )}
                </div>
                <div className="input-cover" />

                <div id="editorjs" style={{ display: !currentNote._id ? 'none' : '' }} />
            </div>
            {currentNote._id && (
                <div className="save-options">
                    <button type="button" className="app-btn px-7 py-2 rounded-full">
                        Save
                    </button>
                    <OptionsIcon onClick={() => dispatch(openOptionsModal())} />
                </div>
            )}
            {optionsModal && (
                <Modal>
                    <EditOptions />
                </Modal>
            )}
        </div>
    );
};

export default Index;

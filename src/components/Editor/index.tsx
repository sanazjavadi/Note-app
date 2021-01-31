/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openOptionsModal, modalState, closeOptionsModal } from '../../reducers/modal';
import { notesState, setCurrentNote, updateNote, DeleteNote, getNotes } from '../../reducers/notes';
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
    const deleteNoteHandler = async () => {
        await dispatch(DeleteNote(currentNote._id));
        dispatch(closeOptionsModal());
        await dispatch(setCurrentNote({}));
        dispatch(getNotes(currentNote.notebook._id));
    };

    const saveNoteHandler = async () => {
        const data = await editor.save();
        const title = data.blocks[0];
        if (!currentNote._id) {
            console.log('Note cannot be saved without title or note id');
            return;
        }

        const description = data.blocks.find((block?: any) => block.type === 'paragraph');

        const updatedNote = {
            ...currentNote,
            title: title.data.text,
            description: description?.data?.text ? description.data.text : '',
            data: data ? JSON.stringify(data) : '',
        };

        dispatch(updateNote({ id: currentNote._id, data: updatedNote }));
        dispatch(setCurrentNote(updateNote));
    };

    useEffect(() => {
        if (editor && editor.isReady) {
            editor.isReady.then(() => editor.destroy());
        }
        if (currentNote._id) {
            if (currentNote.data) {
                setEditor(createNewEditor(JSON.parse(currentNote.data)));
            } else {
                setEditor(createNewEditor(currentNote.data));
            }
        }
    }, [currentNote.data]);
    return (
        <div className="relative h-auto editor-section">
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
                        <>
                            <input id="add-cover" className="hidden" type="file" onChange={(e) => addCoverHandler(e)} />
                            <div className="flex items-center justify-between mx-10 mt-5 mb-10">
                                <button
                                    type="button"
                                    className="app-btn px-7 py-2 rounded-full"
                                    onClick={saveNoteHandler}
                                >
                                    Save
                                </button>
                                <OptionsIcon className="app-svg" onClick={() => dispatch(openOptionsModal())} />
                            </div>
                        </>
                    )}
                </div>

                <div className="input-cover" />
                {currentNote.title && (
                    <div className="flex mx-10 mt-16">
                        <h1 className="pt-10 pl-5 text-2xl">{currentNote.title}</h1>
                    </div>
                )}
                <div id="editorjs" className={!currentNote._id ? 'hidden' : ''} />
            </div>

            {optionsModal && (
                <Modal>
                    <EditOptions deleteNoteHandler={deleteNoteHandler} />
                </Modal>
            )}
        </div>
    );
};

export default Index;

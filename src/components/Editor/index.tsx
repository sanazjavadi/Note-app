/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { notesState } from '../../reducers/notes';
import createNewEditor from '../../utils/createNewEditor';

const Index: React.FC = () => {
    const [editor, setEditor] = useState({});

    const { currentNote } = useSelector(notesState);

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
            {currentNote._id && (
                <div className="save-options">
                    <button type="button" className="app-btn">
                        Save
                    </button>
                </div>
            )}
            <div className="editor">
                <div className="editor-header">
                    <h3>Remember</h3>
                </div>

                <div className="input-cover" />

                <div id="editorjs" style={{ display: !currentNote._id ? 'none' : '' }} />
            </div>
        </div>
    );
};

export default Index;

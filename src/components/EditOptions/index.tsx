/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeOptionsModal } from '../../reducers/modal';
import { themeState } from '../../reducers/theme';
import { notesState } from '../../reducers/notes';
import downloadAsPdf from '../../utils/downloadAsPdf';

// styles
import styles from './styles/editOptions.module.scss';

// assets
import Close from '../../svg/Cancel';

type Iprops = {
    deleteNoteHandler: () => void;
};

const Index: React.FC<Iprops> = ({ deleteNoteHandler }) => {
    const dispatch = useDispatch();
    const { theme } = useSelector(themeState);
    const { currentNote } = useSelector(notesState);
    const { title } = currentNote;
    const dom = document.getElementById('editorjs');
    const downloadAsPdfHandler = () => {
        downloadAsPdf({ dom, title, bg: theme['--bg'] });
        dispatch(closeOptionsModal());
    };
    return (
        <div className={styles.options}>
            <div className={styles.header}>
                <h3>Options</h3>
                <Close onClick={() => dispatch(closeOptionsModal())} />
            </div>

            <div
                className={styles.action}
                role="button"
                tabIndex={-1}
                onKeyDown={deleteNoteHandler}
                onClick={deleteNoteHandler}
            >
                <span>Delete</span>
            </div>

            <div
                className={styles.action}
                role="button"
                tabIndex={-1}
                onKeyDown={downloadAsPdfHandler}
                onClick={downloadAsPdfHandler}
            >
                <span>Export to PDF</span>
            </div>
        </div>
    );
};

export default Index;

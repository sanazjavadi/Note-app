/* eslint-disable react/prop-types */
import React from 'react';
import { createPortal } from 'react-dom';

// styles
import styles from './styles/modal.module.scss';

const Modal: React.FC = ({ children }) => {
    return createPortal(
        <div className={`${styles.overlay} fixed z-10  w-full h-screen left-0 top-0 `}>{children}</div>,
        document.getElementById('portal'),
    );
};

export default Modal;

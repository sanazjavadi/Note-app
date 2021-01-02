/* eslint-disable react/prop-types */
import React from 'react';

// styles
import styles from './styles/modal.module.scss';

const Index: React.FC = ({ children }) => {
    return <div className={`${styles.overlay} fixed z-10  w-full h-screen left-0 top-0 `}>{children}</div>;
};

export default Index;

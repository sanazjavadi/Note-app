/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-filename-extension */

import * as React from 'react';

function SvgPlus(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
            <path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" />
        </svg>
    );
}

export default SvgPlus;

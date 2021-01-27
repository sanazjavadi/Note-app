/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import * as React from 'react';

function SvgEdit(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" {...props}>
            <circle cx="30" cy="50">
                <animate attributeName="r" values="0;5;0" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50">
                <animate attributeName="r" values="0;5;0" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="70" cy="50">
                <animate attributeName="r" values="0;5;0" dur="1.2s" begin="0.8s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
}

export default SvgEdit;

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import * as React from 'react';

function SvgNote(props) {
    return (
        <svg height={512} viewBox="0 0 36 36" width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M31.833 8.377c0 6.917 3.583 11.667 3.583 15S33.5 33.71 18.167 33.71.583 24.293.583 20.627c0-17.167 31.25-24.5 31.25-12.25z"
                fill="#efefef"
            />
            <g fill="#a4afc1">
                <path d="M25.906 5.62l.707-.707 1.414 1.414-.707.707zM29.97 9.686l.707-.707 1.414 1.414-.707.707zM29.791 6.323l1.414-1.414.707.707-1.414 1.414z" />
            </g>
            <path
                d="M20.25 26.25H8.75a2 2 0 01-2-2v-13.5a2 2 0 012-2h11.5a2 2 0 012 2v13.5a2 2 0 01-2 2z"
                fill="#f3f3f1"
            />
            <circle cx={23.5} cy={23.5} fill="#2fdf84" r={5.75} />
            <path d="M20 23.5a5.75 5.75 0 014.625-5.638 5.75 5.75 0 100 11.276A5.75 5.75 0 0120 23.5z" fill="#00b871" />
            <path d="M9 24.25v-13.5a2 2 0 012-2H8.75a2 2 0 00-2 2v13.5a2 2 0 002 2H11a2 2 0 01-2-2z" fill="#d5dbe1" />
            <path d="M23.5 30c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-11.5c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
            <path d="M22.75 20.75h1.5v5.5h-1.5z" />
            <path d="M20.75 22.75h5.5v1.5h-5.5zM15.19 27H8.75A2.752 2.752 0 016 24.25v-13.5A2.752 2.752 0 018.75 8h11.5A2.752 2.752 0 0123 10.75v4.09h-1.5v-4.09c0-.689-.561-1.25-1.25-1.25H8.75c-.689 0-1.25.561-1.25 1.25v13.5c0 .689.561 1.25 1.25 1.25h6.44z" />
            <path d="M9 6h1.5v5H9zM13.75 6h1.5v5h-1.5zM18.5 6H20v5h-1.5zM9.75 18h6.41v1.5H9.75zM9.75 14h4.5v1.5h-4.5z" />
        </svg>
    );
}

export default SvgNote;

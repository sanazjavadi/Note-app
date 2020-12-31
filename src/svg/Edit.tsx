/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';

function SvgEdit(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg height="511pt" viewBox="0 0 512 511" width="511pt" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M496.625 95.914l-80.043-80.039c-20.5-20.5-53.855-20.5-74.36 0L30.228 327.871a24.489 24.489 0 00-6.758 12.727L.836 457.789a45.943 45.943 0 0012.637 41.238A45.937 45.937 0 0054.71 511.66l117.191-22.629a24.53 24.53 0 0012.727-6.758l311.996-311.996c20.5-20.5 20.5-53.859 0-74.363zM49.02 482.204c-5.293 1.023-10.52-.579-14.333-4.392-3.816-3.816-5.414-9.039-4.394-14.332l17.832-92.335 93.23 93.226zM171.94 452.53L59.973 340.56 317.559 82.973 429.53 194.94zm303.47-303.469l-24.669 24.665L338.773 61.754l24.664-24.664c8.805-8.805 23.13-8.805 31.93 0l80.043 80.039c8.8 8.805 8.8 23.129 0 31.933zm0 0" />
        </svg>
    );
}

export default SvgEdit;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

// InterFaces
import { IInput } from './Input';

const Input: React.FC<IInput.IProps> = ({
    type = 'text',
    placeholder,
    error,
    className,
    value,
    onChange,
    ...other
}) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e?: any) => onChange(e)}
                className={className}
                {...other}
            />
            {error && <small className="text-red-400 ml-3">{error}</small>}
        </div>
    );
};

Input.defaultProps = {
    type: 'text',
    className: '',
};

export default Input;

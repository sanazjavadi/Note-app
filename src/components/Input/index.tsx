/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

// InterFaces
import { IInput } from './Input';

const Input: React.FC<IInput.IProps> = ({ type, placeholder, error, className, value, onChange, ...props }) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
                {...props}
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

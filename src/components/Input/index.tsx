/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

type Iprops = {
    type: string;
    placeholder: string;
    error: string;
    className: string;
    value: any;
    onChange: () => void;
};

const Index: React.FC<Iprops> = ({ type, placeholder, error, className, value, onChange, ...props }) => {
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

Index.defaultProps = {
    type: 'text',
    className: '',
};

export default Index;

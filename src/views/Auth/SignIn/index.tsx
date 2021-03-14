/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { Login, userState } from '../../../reducers/auth';
import validate from '../../../utils/validateInfo';

// components
import Input from '../../../components/Input';

// styles
import styles from '../styles/auth.module.scss';

// assets
import Loading from '../../../svg/Loading';

type Iprops = {
    signup: () => void;
};

const Index: React.FC<Iprops> = ({ signup }) => {
    const [errors, setErrors] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const { loading } = useSelector(userState);

    // form values
    const email = useInput('');
    const password = useInput('');

    const handlesignIn = (e) => {
        e.preventDefault();
        const data = {
            email: email.value,
            password: password.value,
        };
        setErrors(validate(data));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(Login(data));
    };

    return (
        <div
            className={`${styles.form} mx-auto lg:w-4/12 md:w-5/12 sm:w-6/12 w-9/12 min-w-min h-auto 
            flex items-center justify-center rounded-2xl flex-col`}
        >
            <div className="flex items-center justify-between px-5 w-full p-7">
                <span className="text-xl">Login</span>
            </div>
            <hr className="h-2 w-full opacity-10" />
            <form className="w-10/12 mt-7" onSubmit={(e) => handlesignIn(e)}>
                <Input
                    value={email.value}
                    onChange={email.onChange}
                    type="text"
                    error={errors.email}
                    placeholder="Email"
                    className="py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />

                <Input
                    value={password.value}
                    onChange={password.onChange}
                    error={errors.password}
                    type="password"
                    placeholder="Password"
                    className="py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />
                <button
                    type="submit"
                    className={`py-4 w-full my-5  h-16 flex font-bold justify-center items-center rounded-2xl hover:opacity-80 transition duration-300 ease-in-out ${
                        loading && 'opacity-30 cursor-wait'
                    } `}
                >
                    {loading ? <Loading className="w-16 h-16 fill-current text-white absolute" /> : 'Login'}
                </button>
            </form>
            <hr className="h-2 w-full opacity-10 mt-4" />
            <p className="text-center mt-5 mb-6 text-sm">
                You have not account ?
                <span
                    role="button"
                    onKeyDown={signup}
                    tabIndex={-1}
                    className="cursor-pointer text-base text-bold  pl-2 hover:opacity-60 transition duration-300 ease-in-out"
                    onClick={signup}
                >
                    Sign Up
                </span>
            </p>
        </div>
    );
};

export default Index;

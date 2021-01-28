/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { signUp, userState } from '../../../reducers/auth';
import validate from '../../../utils/validateInfo';

// assets
import Loading from '../../../svg/Loading';

type Iprops = {
    login: () => void;
};

const Index: React.FC<Iprops> = ({ login }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(userState);
    const [errors, setErrors] = useState({});

    // form values
    const name = useInput('');
    const email = useInput('');
    const password = useInput('');

    const handlesignUp = (e) => {
        e.preventDefault();
        const data = {
            email: email.value,
            name: name.value,
            password: password.value,
        };
        setErrors(validate(data));
        if (Object.keys(errors).length === 0) {
            dispatch(signUp(data));
        }
    };
    return (
        <div className="mx-auto lg:w-4/12  md:w-5/12 sm:w-6/12 w-9/12 min-w-min	 h-auto flex items-center justify-center rounded-2xl flex-col bg-DarkPurple">
            <div className="text-white flex items-center justify-between px-5 w-full p-7">
                <span className="text-xl">Sign up</span>
            </div>
            <hr className="h-2 w-full opacity-10" />
            <form className="w-10/12 mt-7" onSubmit={(e) => handlesignUp(e)}>
                <input
                    value={name.value}
                    onChange={name.onChange}
                    onBlur={name.onChange}
                    type="text"
                    autoComplete="false"
                    placeholder="Name"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none"
                />
                {errors.name && <small className="ml-3 text-red-600">{errors.name}</small>}
                <input
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onChange}
                    type="text"
                    autoComplete="false"
                    placeholder="Email"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />
                {errors.email && <small className="ml-3 text-red-600">{errors.email}</small>}
                <input
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={password.onChange}
                    type="password"
                    autoComplete="false"
                    placeholder="Password"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />
                {errors.password && <small className="ml-3 text-red-600">{errors.password}</small>}
                <button
                    type="submit"
                    className={`bg-LightPurple text-white py-4 w-full my-5  h-16 flex justify-center items-center rounded-2xl hover:opacity-80 transition duration-300 ease-in-out ${
                        loading && 'opacity-30 cursor-wait bg-red-100'
                    } `}
                >
                    {loading ? <Loading className="w-16 h-16 fill-current text-white " /> : 'sign up'}
                </button>
            </form>
            <hr className="h-2 w-full opacity-10 mt-4" />
            <p className="text-LightPurple text-center mt-5 mb-6 text-bold">
                Already have an account?
                <span
                    role="button"
                    tabIndex={-1}
                    onKeyDown={login}
                    className="cursor-pointer  pl-2 hover:opacity-60 transition duration-300 ease-in-out"
                    onClick={login}
                >
                    Log In
                </span>
            </p>
        </div>
    );
};

export default Index;

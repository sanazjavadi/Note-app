/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { signUp, userState } from '../../../reducers/auth';

// assets
import Loading from '../../../svg/Loading';

type Iprops = {
    login: () => void;
};

const Index: React.FC<Iprops> = ({ login }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(userState);

    // form values
    const name = useInput('');
    const email = useInput('');
    const password = useInput('');
    const secondPass = useInput('');

    const handlesignUp = () => {
        const data = {
            email: email.value,
            name: name.value,
            password: password.value,
        };

        dispatch(signUp(data));
    };
    return (
        <div className="mx-auto lg:w-4/12  md:w-5/12 sm:w-6/12 w-9/12 min-w-min	 h-auto flex items-center justify-center rounded-2xl flex-col bg-DarkPurple">
            <div className="text-white flex items-center justify-between px-5 w-full p-7">
                <span className="text-xl">Sign up</span>
            </div>
            <hr className="h-2 w-full opacity-10" />
            <form className="w-10/12 mt-7">
                <input
                    value={name.value}
                    onChange={name.onChange}
                    type="text"
                    autoComplete="false"
                    placeholder="Name"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none"
                />
                <input
                    value={email.value}
                    onChange={email.onChange}
                    type="text"
                    autoComplete="false"
                    placeholder="email"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />
                <input
                    value={password.value}
                    onChange={password.onChange}
                    type="password"
                    autoComplete="false"
                    placeholder="Password"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />
                <input
                    value={secondPass.value}
                    onChange={secondPass.onChange}
                    autoComplete="false"
                    type="password"
                    placeholder="Password again"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />

                <button
                    type="button"
                    className={`bg-LightPurple text-white py-4 w-full my-5  h-16 flex justify-center items-center rounded-2xl hover:opacity-80 transition duration-300 ease-in-out ${
                        loading && 'opacity-30 cursor-wait bg-red-100'
                    } `}
                    onClick={() => handlesignUp()}
                >
                    {loading ? <Loading className="w-16 h-16 fill-current text-white " /> : 'sign up'}
                </button>
            </form>
            <hr className="h-2 w-full opacity-10 mt-4" />
            <p className="text-LightPurple text-center mt-5 mb-6 text-bold">
                You have account?
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

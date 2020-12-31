/* eslint-disable react/prop-types */
import React, { ReactEventHandler } from 'react';

type Iprops = {
    signup: ReactEventHandler;
};

const Index: React.FC<Iprops> = ({ signup }) => {
    return (
        <div className="mx-auto lg:w-4/12  md:w-5/12 sm:w-6/12 w-9/12 min-w-min	 h-auto flex items-center justify-center rounded-2xl flex-col bg-DarkPurple">
            <div className="text-white flex items-center justify-between px-5 w-full p-7">
                <span className="text-xl">Login</span>
            </div>
            <hr className="h-2 w-full opacity-10" />
            <form className="w-10/12 mt-7">
                <input
                    type="text"
                    placeholder="Email"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />

                <button
                    type="button"
                    className="bg-LightPurple text-white py-4 w-full my-5 rounded-2xl hover:opacity-80 transition duration-300 ease-in-out"
                >
                    Login{' '}
                </button>
            </form>
            <hr className="h-2 w-full opacity-10 mt-4" />
            <p className="text-LightPurple text-center mt-5 mb-6 text-bold">
                You have not account ? // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <span
                    role="button"
                    onKeyDown={signup}
                    tabIndex={-1}
                    className="cursor-pointer  pl-2 hover:opacity-60 transition duration-300 ease-in-out"
                    onClick={signup}
                >
                    Sign Up
                </span>
            </p>
        </div>
    );
};

export default Index;

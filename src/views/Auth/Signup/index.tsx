/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { signUp, userState } from '../../../reducers/auth';
import validate from '../../../utils/validateInfo';

// components
import Input from '../../../components/Input';

// styles
import styles from '../styles/auth.module.scss';

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
    const data = {
        email: email.value,
        name: name.value,
        password: password.value,
    };
    // useEffect(() => {
    //     setErrors(validate(data));
    // }, []);

    const handlesignUp = (e) => {
        e.preventDefault();
        setErrors(validate(data));
        if (Object.keys(errors).length === 0) {
            dispatch(signUp(data));
        }
    };
    return (
        <div
            className={`${styles.form} mx-auto lg:w-4/12  md:w-5/12 sm:w-6/12 w-9/12 min-w-min	h-auto
            flex items-center justify-center rounded-2xl flex-col`}
        >
            <div className="text-white flex items-center justify-between px-5 w-full p-7">
                <span className="text-xl">Sign up</span>
            </div>
            <hr className="h-2 w-full opacity-10" />
            <form className="w-10/12 mt-7" onSubmit={(e) => handlesignUp(e)}>
                <Input
                    value={name.value}
                    onChange={name.onChange}
                    type="text"
                    error={errors.name}
                    placeholder="Name"
                    className="py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none"
                />
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
                    {loading ? <Loading className="w-16 h-16 fill-current text-white " /> : 'Sign up'}
                </button>
            </form>
            <hr className="h-2 w-full opacity-10 mt-4" />
            <p className=" text-center mt-5 mb-6 text-bold">
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

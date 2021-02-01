import React, { useState } from 'react';
import SignUp from './Signup';
import Login from './SignIn';

const Index: React.FC = () => {
    const [auth, setauth] = useState('SIGNUP');

    const login = () => setauth('LOGIN');
    const signUp = () => setauth('SIGNUP');
    return (
        <div className="w-full h-screen grid items-center bg-transparent">
            {auth === 'SIGNUP' ? <SignUp login={login} /> : <Login signup={signUp} />}
        </div>
    );
};

export default Index;

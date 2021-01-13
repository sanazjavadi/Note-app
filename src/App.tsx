import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { applyTheme } from './utils';
import { themeState } from './reducers/theme';
import { userState } from './reducers/auth';

// components
import ProtectedRoutes from './views/ProtectedRoutes';
import Auth from './views/Auth';

const App: React.FC = () => {
    const { theme } = useSelector(themeState);
    const user = useSelector(userState);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return <div>{user ? <Auth /> : <ProtectedRoutes />}</div>;
};

export default App;

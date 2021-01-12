import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { applyTheme } from './utils';
import { themeState } from './reducers/theme';

// components
// import ProtectedRoutes from './views/ProtectedRoutes';

import Auth from './views/Auth';

const App: React.FC = () => {
    const { theme } = useSelector(themeState);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <div>
            {/* <ProtectedRoutes /> */}

            <Auth />
        </div>
    );
};

export default App;

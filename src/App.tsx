import * as React from 'react';

// components
import ProtectedRoutes from './views/ProtectedRoutes';
// import Auth from './views/Auth'

const App: React.FC = () => {
    return (
        <>
            <ProtectedRoutes />
            {/* <Auth/> */}
        </>
    );
};

export default App;

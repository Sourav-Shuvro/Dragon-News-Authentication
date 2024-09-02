import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {users, loading} = useContext(AuthContext);

    if(loading){
        return <div className='flex items-center min-h-screen w-10 mx-auto'>
            <span className="loading loading-spinner text-neutral"></span>
        </div>
    }

    if(users){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
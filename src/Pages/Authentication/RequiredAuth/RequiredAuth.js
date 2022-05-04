import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location = useLocation()
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h1>your email is not verified</h1>
            <h3>please verified your email</h3>
            <Button onClick={async () => {
                await sendEmailVerification();
                toast("email verification send")

            }} variant='dark'>send verification email address again</Button>
        </div>
    }


    return children;
};

export default RequiredAuth;
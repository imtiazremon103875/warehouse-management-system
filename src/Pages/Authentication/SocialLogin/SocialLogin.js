import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='m-4 text-primary  mt-3 ms-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'>

                </div>
            </div>

            <Button onClick={() => signInWithGoogle()} className='w-100 d-block rounded-pill' variant="dark" type="submit">
                <img className='me-3' alt="" />
                Login with Google
            </Button>
        </div>
    );
};

export default SocialLogin;
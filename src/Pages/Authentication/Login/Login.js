import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );
    if (loading || sending) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error || error2) {
        errorElement = <p className='text-danger'>{error?.message} {error2?.message}</p>
    }
    if (user) {
        navigate('/home')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        // navigate('/home')

    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast("email send")
        }
        else {
            toast("please give an email address")
        }
    }
    return (
        <div className='w-25 mx-auto border border-dark mt-3 px-3 py-2 rounded'>
            <h2 className='text-center'>Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-5" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorElement}

                <Button className='w-100' variant="dark" type="submit">
                    Login
                </Button>
                <p className='my-3'>New in  website? <Link className='text-decoration-none' to="/register"> please Register</Link> </p>
            </Form>

            <p>Forget Password? <button onClick={resetPassword} className=' btn btn-link text-decoration-none text-primary'>Reset password</button> </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
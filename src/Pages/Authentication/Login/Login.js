import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
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

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        navigate('/home')

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

                <Button className='w-100' variant="dark" type="submit">
                    Login
                </Button>
                <p className='my-3'>New in  website? <Link className='text-decoration-none' to="/register"> please Register</Link> </p>
            </Form>

            <p>Forget Password? <button className=' btn btn-link text-decoration-none text-primary'>Reset now</button> </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
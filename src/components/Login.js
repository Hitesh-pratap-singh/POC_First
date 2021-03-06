import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/')
        }
        catch{
            setError('Failed to sign in');
        }
        setLoading(false);
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Login</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mt-3' id='email'>
                            <Form.Control type='email' ref={emailRef} placeholder='Email' required />
                        </Form.Group>
                        <Form.Group className='mt-3' id='password'>
                            <Form.Control type='password' ref={passwordRef} placeholder='Password' required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 mt-2' type='submit'>Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className = 'w-100 text-center mt-2'>Don't have an account? <Link to='/signup'>Sign Up</Link></div>
        </>
    );
}

export default Login;
import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert, Container} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords Do Not Match');
        }
         
        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        }
        catch{
            setError('Failed to create an account');
        }
        setLoading(false);
    }

    return(
        <div className='Signup' >
        <Container className='d-flex'>
            <Card style={{height: '100vh', width: '490px', textAlign: 'right'}}>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mt-3' id='email'>
                            <Form.Control type='email' ref={emailRef} placeholder='Email' required />
                        </Form.Group>
                        <Form.Group className='mt-3' id='password'>
                            <Form.Control type='password' ref={passwordRef} placeholder='Password' required />
                        </Form.Group>
                        <Form.Group className='mt-3' id='password-confirm'>
                            <Form.Control type='password' ref={passwordConfirmRef} placeholder='Confirm Password' required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 mt-5' type='submit'>Sign Up</Button>
                        <Button disabled={loading} className='w-100 mt-3' style={{backgroundColor:'rgb(248, 54, 33)', border: 'none'}}>Sign Up with Google Plus</Button>
                    </Form>
                    <div className = 'w-100 text-center mt-2'>Already have an account? <Link to='/login'>Log In</Link></div>
                </Card.Body>
            </Card>
            </Container>
        </div>
    );
}

export default Signup;
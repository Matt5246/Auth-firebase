// @ts-nocheck
import * as React from 'react';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext.tsx';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup () {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const passwordConfirmRef = React.useRef<HTMLInputElement>(null);
  const {signup} = useAuth();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (passwordRef.current && passwordConfirmRef.current) {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match');
      }
    }
    
    try{
      
      setError('');
      setLoading(true);
      console.log('credentials: ',emailRef.current?.value, passwordRef.current?.value);
      await signup(emailRef.current?.value, passwordRef.current?.value);
      navigate('/');
    } catch(e) {
      console.log('signup, problem:',e);
      setError('Failed to create an account');
    }
    setLoading(false);
  }
  
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
                  
          {error && <Alert variant="danger" className="alert alert-danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>

        <div className='w-100 text-center'>
          Already have an account? <Link to="/signin">Sign In</Link>

        </div>
      </Card>
    </>
  );
}

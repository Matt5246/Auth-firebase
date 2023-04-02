// @ts-nocheck
import * as React from 'react';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext.tsx';
import { Link, useNavigate} from 'react-router-dom';

export default function Signin () {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const {signin, signInWithGoogle} = useAuth();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
        
    try{
      
      setError('');
      setLoading(true);
      console.log('credentials: ',emailRef.current?.value, passwordRef.current?.value);
      await signin(emailRef.current?.value, passwordRef.current?.value);
        navigate('/');
    } catch(e) {
      console.log('signin, problem:',e);
      setError('Failed to sign in');
    }
    setLoading(false);
  }
  async function handleGoogleSignin (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
        
    try{
      
      setError('');
      setLoading(true);
      await signInWithGoogle();
        navigate('/');
    } catch(e) {
      console.log('signin, problem:',e);
      setError('Failed to sign in');
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign in</h2>
                  
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
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign in
            </Button>
          </Form>
        </Card.Body>
        <div className='w-100 text-center'>
            <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className='w-100 text-center'>
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
        <div className='w-100 text-center'>  
        <Link onClick={handleGoogleSignin} > </Link> <Button className='btn-sm m-2'>Sign In With Google</Button>   
        </div>    
        </Card>               
    </>
  );
}

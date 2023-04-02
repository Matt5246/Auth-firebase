// @ts-nocheck
import * as React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.tsx';

export default function App () {
    const [error, setError] = React.useState('');
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();

    async function handleLogout () {
        console.log('logout');
        setError('');

        try{
            await logout();
            navigate('/signin');
        } catch(e) {
            setError('Failed to log out');
        }
    }
  return (
    <>
      <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger" className="alert alert-danger">{error}</Alert>}
            <strong>Email:</strong>{currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Need an account? <Link to="/signup">Sign Up</Link>
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  );
}

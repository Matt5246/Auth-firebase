// @ts-nocheck
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext.tsx'

const PrivateRoutes = () => {
    const {currentUser} = useAuth();
    console.log('privateRoute, currentUser:',currentUser);
    
  return (

    currentUser ? <Outlet/> : <Navigate to="/signin" />
    
  )
}

export default PrivateRoutes

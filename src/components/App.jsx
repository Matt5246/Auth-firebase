// @ts-nocheck
import React from "react";
import Signup from "./Signup.tsx";
import {Container} from "react-bootstrap";
import {AuthProvider} from "../contexts/AuthContext.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.tsx";
import Signin from "./Signin.tsx";
import PrivateRoutes from "./privateRoutes.tsx";
import ForgotPassword from "./ForgotPassword.tsx";
import UpdateProfile from "./UpdateProfile.tsx";

function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
        <AuthProvider>
          <Router>
            <Routes>
            
               <Route element={<PrivateRoutes/>}>
                <Route path="/update-profile" element={<UpdateProfile/>} />
                <Route path="/" element={<Dashboard/>} />
               </Route>
              <Route path="/signup" element={<Signup/>} />
              <Route path="/signin" element={<Signin/>} />        
              <Route path="/forgot-password" element={<ForgotPassword/>} />    
            </Routes>
          </Router>
          </AuthProvider>          
        </div>
      </Container>
    
  );
}

export default App;

import * as React from 'react';
import {auth} from '../firebase';

export interface IAppProps {
}
const AuthContext = React.createContext({});
export function useAuth () {
  return React.useContext(AuthContext);
}

export default function App ({ children }: React.PropsWithChildren<IAppProps>) {
    const [currentUser, setCurrentUser] = React.useState();
    const value = {
        currentUser
    }
    function Signup (email: string, password: string) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

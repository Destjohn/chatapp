import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

const AuthContext  = React.createContext()

//provider コンテキストで渡したい値を指定するもの
const AuthProvider = ( { children }) => {
    const [user, setUser] = useState(null);
    
    //認証済みユーザーを所得してuserに格納する
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, []);
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}
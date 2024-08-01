import React, { createContext, useState, useContext } from 'react';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-z5ofhx02imu7b8vf.us.auth0.com',
  clientId: 'ZQZX9J20fEC5Ze1zPZfg47J50QadAIGc',
});

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        audience: 'https://dev-z5ofhx02imu7b8vf.us.auth0.com/api/v2/',
      });
      setUser(credentials);
    } catch (error) {
      console.error('Authentication failed', error);
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession();
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

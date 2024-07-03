import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading status

  const signIn = async () => {
    setLoading(true); // Set loading to true when starting the sign-in process
    try {
      // Simulate sign-in logic with a timeout (replace with actual logic)
      setTimeout(async () => {
        const response = await fetch('http://localhost:5000/users');
        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(true);
          setUserData(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      }, 1000); // Example delay for demonstration purposes
    } catch (error) {
      console.error('Error signing in:', error.message);
    } finally {
      setLoading(false); // Ensure loading is set to false after the process
    }
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  useEffect(() => {
    // Simulate checking if user is already signed in when the component mounts
    const checkSignInStatus = async () => {
      try {
        // Replace with actual logic to check if user is signed in
        const response = await fetch('http://localhost:5000/users');
        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(data.isLoggedIn);
          setUserData(data.name);
        } else {
          setIsLoggedIn(false);
          setUserData(null);
        }
      } catch (error) {
        console.error('Error checking sign-in status:', error.message);
      } finally {
        setLoading(false); // Ensure loading is set to false after the check
      }
    };

    checkSignInStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

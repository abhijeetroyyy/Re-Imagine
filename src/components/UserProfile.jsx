import React from 'react';
import { useAuth } from './AuthContext'; // Import your AuthContext hook

const UserProfile = () => {
  const { isLoggedIn, userData, signIn, signOut } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {userData ? userData.name : 'User'}</h2>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </div>
  );
};

export default UserProfile;

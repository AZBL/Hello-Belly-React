import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './Navbar.css';
import { useZoom } from './ZoomContext';

const Navbar = () => {
  const { user, zoomAccessToken, handleGoogleSignIn, handleSignOut } = useZoom();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log('User signed in:', currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (zoomAccessToken) {
      console.log('Zoom access token updated:', zoomAccessToken);
      localStorage.setItem('zoomAccessToken', zoomAccessToken);
    }
  }, [zoomAccessToken]);

  const handleCreateMeeting = () => {
    navigate('/create_meeting', { state: { accessToken: zoomAccessToken } });
  };

  const handleSignInWithZoom = () => {
    window.location.href = '/login'; // Adjust as needed to hit your login endpoint
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/create_meeting">Consultation</Link>
      </div>
      <div>
        {user ? (
          <div>
            <span>{user.displayName}</span>
            <button onClick={handleCreateMeeting}>Create Meeting</button>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
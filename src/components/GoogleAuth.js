import React, { useState, useEffect } from 'react';

function GoogleAuth() {
  const [auth, setAuth] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        clientId:
          '907558372126-iormelmouneobr1htfqna2mf7pvhnmkh.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'streamy',
      });
      const auth = window.gapi.auth2.getAuthInstance();
      setAuth(auth);
      setIsSignedIn(auth.isSignedIn.get());
      auth.isSignedIn.listen(() => setIsSignedIn(auth.isSignedIn.get()));
    });
  }, []);

  const renderAuthButton = () => {
    if (isSignedIn === null) return null;
    else if (isSignedIn) {
      return <button onClick={auth.signOut}>Sign out</button>;
    } else {
      return <button onClick={auth.signIn}>Sign in with google</button>;
    }
  };

  return <div>{renderAuthButton()}</div>;
}

export default GoogleAuth;

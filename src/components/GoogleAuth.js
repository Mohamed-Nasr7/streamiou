import React, { useState, useEffect } from 'react';

function GoogleAuth() {
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
      setIsSignedIn(auth.isSignedIn.get());
    });
  }, []);

  return <div></div>;
}

export default GoogleAuth;

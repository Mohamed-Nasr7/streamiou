import React, { useEffect } from 'react';

function GoogleAuth() {
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        clientId:
          '907558372126-iormelmouneobr1htfqna2mf7pvhnmkh.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'streamy',
      });
    });
  }, []);

  return <div></div>;
}

export default GoogleAuth;

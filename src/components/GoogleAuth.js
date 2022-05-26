import React, { useEffect } from 'react';

function GoogleAuth() {
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '907558372126-iormelmouneobr1htfqna2mf7pvhnmkh.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }, []);

  return <div></div>;
}

export default GoogleAuth;

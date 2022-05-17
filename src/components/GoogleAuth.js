import React, { useEffect } from 'react';

function GoogleAuth() {
  useEffect(() => {
    window.gapi.load('client:auth2');
  }, []);

  return <div></div>;
}

export default GoogleAuth;

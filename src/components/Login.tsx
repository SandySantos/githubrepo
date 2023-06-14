import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';

const clientid = '721dc46a9c4865a51787';
const clientsecret = 'c1ad13195e5866dbfcc626d0e6b8ff1c43edc12e';
const redirecturl = 'http://localhost:5000/home';
const Login = () => {
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientid}&redirect_uri=${redirecturl}`;
  };

  const accessToken = localStorage.getItem('access_token');
  console.log(accessToken);

  return (
    <div>
      <h1 className='bg-orange-700'>Login</h1>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
};

export default Login;

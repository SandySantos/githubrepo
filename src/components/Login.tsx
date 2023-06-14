const clientid = '721dc46a9c4865a51787';
const redirecturl = 'http://localhost:5000/home';
const Login = () => {
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientid}&redirect_uri=${redirecturl}`;
  };

  const accessToken = localStorage.getItem('access_token');
  console.log(accessToken);

  return (
    <div className='flex justify-center text-5xl font-semibold absolute inset-0 z-10 top-[50%]  '>
      <div>
        Login
        <div
          className='p-2 border rounded text-sm text-center m-2 hover:cursor-pointer'
          onClick={handleLogin}
        >
          Login with GitHub
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const goTo = (url: string) => navigate(url);
  return (
    <>
      <div className='flex justify-center text-5xl font-semibold absolute inset-0 z-10 top-[50%]  '>
        <div>
          <span className='text-red-500'>404 </span>Not Found
          <div
            className='p-2 border rounded text-base text-center m-2 hover:cursor-pointer'
            onClick={() => goTo('/home')}
          >
            Go Home
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

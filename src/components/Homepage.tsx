import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRepositoryList } from '../redux/actions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Homepage = () => {
  const navigate = useNavigate();
  const goTo = (url: string) => navigate(url);

  const dispatch = useAppDispatch();
  const repositorylist = useAppSelector((state) => state.repo.repolist);
  useEffect(() => {
    dispatch(getRepositoryList());
  }, [dispatch]);

  const tableconst = ['Name', 'Full Name', 'description', 'URL'];
  return (
    <>
      {repositorylist && repositorylist.length > 0 && (
        <>
          <div className='text-center text-3xl font-semibold underline underline-offset-8'>
            Repositry List
          </div>
          <div className='max-w-5xl p-2 mx-auto'>
            <table>
              <thead>
                <tr className='border'>
                  {tableconst.map((title, i) => (
                    <th key={i.toString()} className='text-left p-1'>
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {repositorylist.map((data: any, listidx: number) => (
                  <tr
                    key={listidx.toString()}
                    onClick={() => {
                      console.log('hii');
                      goTo(`/repodetails/${data.owner.login}:${data.name}`);
                    }}
                    className='border hover:bg-slate-100 hover:cursor-pointer'
                  >
                    <td className='text-left p-1'>{data.name}</td>
                    <td className='text-left p-1'>{data.full_name}</td>
                    <td className='text-left p-1'>{data.description}</td>
                    <td className='text-left p-1'>
                      <button
                        className='whitespace-nowrap text-green-600 hover:underline'
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(data.html_url);
                        }}
                      >
                        Github Link
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRepositoryDetails } from '../redux/actions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const RepoDetails = () => {
  const { account } = useParams();

  // const [reportdetails, SetReportdetails] = useState<any>();
  const dispatch = useAppDispatch();
  const reportdetails: any = useAppSelector((state) => state.repo.repodetails);

  useEffect(() => {
    if (account) {
      dispatch(getRepositoryDetails(account));
    }
  }, [account, dispatch]);

  return (
    <>
      {reportdetails ? (
        <div className=' max-w-5xl m-3 p-3 flex justify-center items-center gap-2 border shadow-md rounded-md'>
          <div>
            {reportdetails.owner.avatar_url && (
              <div className='w-24 h-24 rounded-full'>
                <img src={reportdetails.owner.avatar_url} alt='avatar_url' />
              </div>
            )}
            {reportdetails.name && <div>Name:{reportdetails.name}</div>}
            {reportdetails.owner.login && (
              <div>Owner:{reportdetails.owner.login}</div>
            )}
            {reportdetails.forks_count && (
              <div>Forks:{reportdetails.forks_count}</div>
            )}
            {reportdetails.stargazers_count && (
              <div>Stargazers:{reportdetails.stargazers_count}</div>
            )}
            {/* {reportdetails.watchers && (
              <div>Watchers:{reportdetails.watchers}</div>
            )} */}
          </div>
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </>
  );
};

export default RepoDetails;

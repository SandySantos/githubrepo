import axios, { AxiosResponse } from 'axios';
import { REPO_DETAILS, REPO_LIST } from './types';
import { AppDispatch } from './store';

export const getRepositoryList = () => (dispatch: AppDispatch) => {
  axios
    .get('https://api.github.com/repositories', {
      params: {
        q: 'created:>2021-01-01',
        sort: 'stars',
        order: 'desc',
      },
    })
    .then((res: AxiosResponse) => {
      dispatch({ type: REPO_LIST, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const getRepositoryDetails =
  (account: string) => (dispatch: AppDispatch) => {
    console.log('!!!!!!!!!!QQQQQQ');
    const textArray: Array<string> = account?.split(':');
    const url = `https://api.github.com/repos/${textArray[0]}/${textArray[1]}`;
    axios
      .get(url)
      .then((res) => {
        console.log('222', res);
        dispatch({ type: REPO_DETAILS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

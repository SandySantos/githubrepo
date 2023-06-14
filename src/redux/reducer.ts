import { REPO_DETAILS, REPO_LIST } from './types';

const initialstate = { repolist: [], repodetails: undefined };
export const repoReducer = (state = initialstate, action: any) => {
  switch (action.type) {
    case REPO_DETAILS: {
      return { ...state, repodetails: { ...action.payload } };
    }
    case REPO_LIST: {
      return { ...state, repolist: action.payload };
    }
    default:
      return state;
  }
};

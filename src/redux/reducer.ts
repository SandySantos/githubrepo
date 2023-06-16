import { REPO_DETAILS, REPO_DETAILS_ERROR, REPO_LIST } from "./types";

const initialstate = { repolist: [], repodetails: undefined, error: undefined };
export const repoReducer = (state = initialstate, action: any) => {
  switch (action.type) {
    case REPO_DETAILS: {
      return { ...state, repodetails: { ...action.payload } };
    }
    case REPO_LIST: {
      return { ...state, repolist: action.payload };
    }
    case REPO_DETAILS_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

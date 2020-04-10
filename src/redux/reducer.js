export const GET_REPOS = 'project2/repos/LOAD';
export const GET_REPOS_SUCCESS = 'project2/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'project2/repos/LOAD_FAIL';

export default function reducer(state = {repos: []}, action) {
  switch (action.type) {
    case GET_REPOS:
      return {...state, loading: true};
    case GET_REPOS_SUCCESS:
      return {...state, loading: false, repos: action.payload.data};
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories',
      };
    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`,
      },
    },
  };
}

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        user: {},
        loading: false,
        error: action.payload,
      };
    case 'SET_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return initialState;
    default:
      return state;
  }
};

export default userReducer;


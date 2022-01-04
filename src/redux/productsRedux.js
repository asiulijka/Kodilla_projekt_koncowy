import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({products}) => products.data;
export const getById = ({products}, id) => products.data.filter(e => e._id === id); 

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
// const FETCH_START = createActionName('FETCH_START');
// const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
// const FETCH_ERROR = createActionName('FETCH_ERROR');

const FETCH_ALL_PRODUCTS_START = createActionName('FETCH_ALL_PRODUCTS_START');
const FETCH_ALL_PRODUCTS_SUCCESS = createActionName('FETCH_ALL_PRODUCTS_SUCCESS');
const FETCH_ALL_PRODUCTS_ERROR = createActionName('FETCH_ALL_PRODUCTS_ERROR');


/* action creators */
// export const fetchStarted = payload => ({ payload, type: FETCH_START });
// export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
// export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const fetchAllProductsStarted = payload => ({ payload, type: FETCH_ALL_PRODUCTS_START });
export const fetchAllProductsSuccess = payload => ({ payload, type: FETCH_ALL_PRODUCTS_SUCCESS });
export const fetchAllProductsError = payload => ({ payload, type: FETCH_ALL_PRODUCTS_ERROR });


/* thunk creators */
export const fetchAllProducts = () => {
  return (dispatch, getState) => {
    dispatch(fetchAllProductsStarted());

    Axios
      .get(`${api.url}/api/products`)
      .then(res => {
        dispatch(fetchAllProductsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchAllProductsError(err.message || true));
      });
  };
};


/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_ALL_PRODUCTS_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ALL_PRODUCTS_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};

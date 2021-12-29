import Axios from 'axios';

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

// const FETCH_BY_ID_START = createActionName('FETCH_BY_ID_START');
// const FETCH_BY_ID_SUCCESS = createActionName('FETCH_BY_ID_SUCCESS');
// const FETCH_BY_ID_ERROR = createActionName('FETCH_BY_ID_ERROR');

/* action creators */
// export const fetchStarted = payload => ({ payload, type: FETCH_START });
// export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
// export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const fetchAllProductsStarted = payload => ({ payload, type: FETCH_ALL_PRODUCTS_START });
export const fetchAllProductsSuccess = payload => ({ payload, type: FETCH_ALL_PRODUCTS_SUCCESS });
export const fetchAllProductsError = payload => ({ payload, type: FETCH_ALL_PRODUCTS_ERROR });

// export const fetchByIdStarted = payload => ({ payload, type: FETCH_BY_ID_START });
// export const fetchByIdSuccess = payload => ({ payload, type: FETCH_BY_ID_SUCCESS });
// export const fetchByIdError = payload => ({ payload, type: FETCH_BY_ID_ERROR });


/* thunk creators */
export const fetchAllProducts = () => {
  console.log('fetchAllProducts in productsRedux START');
  return (dispatch, getState) => {
    dispatch(fetchAllProductsStarted());
    console.log('fetchAllProducts in productsRedux END');

    Axios
      .get(`http://localhost:8000/api/products`)
      .then(res => {
        dispatch(fetchAllProductsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchAllProductsError(err.message || true));
      });
  };
};

// export const fetchById = (id) => {
//   return (dispatch, getState) => {
//     dispatch(fetchByIdStarted());

//     Axios
//       .get(`http://localhost:8000/api/products/${id}`)
//       .then(res => {
//         dispatch(fetchByIdSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(fetchByIdError(err.message || true));
//       });
//   };
// };

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
    // case FETCH_BY_ID_START: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: true,
    //       error: false,
    //     },
    //   };
    // }
    // case FETCH_BY_ID_SUCCESS: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: false,
    //     },
    //     data: statePart.data.map(e => e._id === action.payload._id ? action.payload : e),
    //   };
    // }
    // case FETCH_BY_ID_ERROR: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: action.payload,
    //     },
    //   };
    // }
    default:
      return statePart;
  }
};

// import Axios from 'axios';

/* selectors */
export const getAll = ({cart}) => cart.data;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');
const QTY_UP = createActionName('QTY_UP');
const QTY_DOWN = createActionName('QTY_DOWN');


// const ADD_TO_CART_START = createActionName('ADD_TO_CART_START');
// const ADD_TO_CART_SUCCESS = createActionName('ADD_TO_CART_SUCCESS');
// const ADD_TO_CART_ERROR = createActionName('ADD_TO_CART_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const clearCart = payload => ({ payload, type: CLEAR_CART });
export const qtyUp = payload => ({ payload, type: QTY_UP });
export const qtyDown = payload => ({ payload, type: QTY_DOWN });

// export const addToCartStarted = payload => ({ payload, type: ADD_TO_CART_START });
// export const addToCartSuccess = payload => ({ payload, type: ADD_TO_CART_SUCCESS });
// export const addToCartError = payload => ({ payload, type: ADD_TO_CART_ERROR });

// /* thunk creators */
// export const addToCart = () => {
//   return (dispatch, getState) => {
//     dispatch(addToCartStarted());

//     Axios
//       .get(`http://localhost:8000/api/cart`)
//       .then(res => {
//         dispatch(addToCartSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(addToCartError(err.message || true));
//       });
//   };
// };



/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
      // console.log(action.payload);
      return {
        ...statePart,
        data: [...statePart.data.filter(product => product._id !== action.payload)],
      };
    }
    case CLEAR_CART: {
      return {
        ...statePart,
        data: [],
      };
    }
    case QTY_UP: {
      return {
        ...statePart,
        data: statePart.data.map(e => e._id === action.payload ? 
          {
            ...e,
            qty: e.qty + 1,
          }
          : e ),
      };
    }
    case QTY_DOWN: {
      return {
        ...statePart,
        data: statePart.data.map(e => e._id === action.payload ? 
          {
            ...e,
            qty: e.qty > 1 ? e.qty - 1 : e.qty,
          }
          : e ),
      };
    }
    // case ADD_TO_CART_START: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: true,
    //       error: false,
    //     },
    //   };
    // }
    // case ADD_TO_CART_SUCCESS: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: false,
    //     },
    //     data: action.payload,
    //   };
    // }
    // case ADD_TO_CART_ERROR: {
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

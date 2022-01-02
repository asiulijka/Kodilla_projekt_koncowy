import Axios from 'axios';

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
// const CLEAR_CART = createActionName('CLEAR_CART');
const QTY_UP = createActionName('QTY_UP');
const QTY_DOWN = createActionName('QTY_DOWN');
const CHANGE_COMMENT = createActionName('CHANGE_COMMENT');
// const SEND_ORDER = createActionName('SEND_ORDER');


const SEND_ORDER_START = createActionName('SEND_ORDER_START');
const SEND_ORDER_SUCCESS = createActionName('SEND_ORDER_SUCCESS');
const SEND_ORDER_ERROR = createActionName('SEND_ORDER_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
// export const clearCart = payload => ({ payload, type: CLEAR_CART });
export const qtyUp = payload => ({ payload, type: QTY_UP });
export const qtyDown = payload => ({ payload, type: QTY_DOWN });
export const changeComment = payload => ({ payload, type: CHANGE_COMMENT });
// export const sendOrder = payload => ({ payload, type: SEND_ORDER });

export const sendOrderStarted = payload => ({ payload, type: SEND_ORDER_START });
export const sendOrderSuccess = payload => ({ payload, type: SEND_ORDER_SUCCESS });
export const sendOrderError = payload => ({ payload, type: SEND_ORDER_ERROR });

// /* thunk creators */
export const sendOrder = orderDetails => {
  return (dispatch, getState) => {
    dispatch(sendOrderStarted());

    Axios
      .post(`http://localhost:8000/api/order`, orderDetails)
      .then(res => {
        dispatch(sendOrderSuccess(res.data));
      })
      .catch(err => {
        dispatch(sendOrderError(err.message || true));
      });
  };
};



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
        data: [...statePart.data.filter(product => product.cartId !== action.payload)],
      };
    }
    // case CLEAR_CART: {
    //   return {
    //     ...statePart,
    //     data: [],
    //   };
    // }
    case QTY_UP: {
      return {
        ...statePart,
        data: statePart.data.map(product => product.cartId === action.payload ? 
          {
            ...product,
            qty: product.qty + 1,
          }
          : product ),
      };
    }
    case QTY_DOWN: {
      return {
        ...statePart,
        data: statePart.data.map(product => product.cartId === action.payload ? 
          {
            ...product,
            qty: product.qty > 1 ? product.qty - 1 : product.qty,
          }
          : product ),
      };
    }
    case CHANGE_COMMENT: {
      return {
        ...statePart,
        data: statePart.data.map(product => product.cartId === action.payload.id ? 
          {
            ...product,
            comment: action.payload.comment,
          }
          : product ),
      };
    }
    case SEND_ORDER_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case SEND_ORDER_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: [],
      };
    }
    case SEND_ORDER_ERROR: {
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

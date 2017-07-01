import { ADD_CUSTOMER, ADD_CUSTOMERS, DELETE_CUSTOMER } from './CustomerActions';

// Initial State
const initialState = { data: [] };

const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER :
      return {
        data: [action.customer, ...state.data],
      };

    case ADD_CUSTOMERS :
      return {
        data: action.customers,
      };

    case DELETE_CUSTOMER :
      return {
        data: state.data.filter(customer => customer.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all customers
export const getCustomers = state => state.customers.data;

// Get customer by cuid
export const getCustomer = (state, cuid) => state.customers.data.filter(customer => customer.cuid === cuid)[0];

// Export Reducer
export default CustomerReducer;

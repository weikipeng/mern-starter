import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

// Export Actions
export function addCustomer(customer) {
  return {
    type: ADD_CUSTOMER,
    customer,
  };
}

export function addCustomerRequest(customer) {
  return (dispatch) => {
    return callApi('customers', 'post', {
      customer: customer,
    }).then(res => dispatch(addCustomer(res.customer)));
  };
}

export function addCustomers(customers) {
  return {
    type: ADD_CUSTOMERS,
    customers,
  };
}

export function fetchCustomers() {
  return (dispatch) => {
    return callApi('customers').then(res => {
      dispatch(addCustomers(res.customers));
    });
  };
}

export function fetchCustomer(cuid) {
  return (dispatch) => {
    return callApi(`customers/${cuid}`).then(res => dispatch(addCustomer(res.customer)));
  };
}

export function deleteCustomer(cuid) {
  return {
    type: DELETE_CUSTOMER,
    cuid,
  };
}

export function deleteCustomerRequest(cuid) {
  return (dispatch) => {
    return callApi(`customers/${cuid}`, 'delete').then(() => dispatch(deleteCustomer(cuid)));
  };
}

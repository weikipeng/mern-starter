import React, { PropTypes } from 'react';

// Import Components
import CustomerListItem from './CustomerListItem/CustomerListItem';

function CustomerList(props) {
  return (
    <div className="row">
      {
        props.customers.map(customer => (
          <CustomerListItem
            customer={customer}
            key={customer.cuid}
            onDelete={() => props.handleDeleteCustomer(customer.cuid)}
          />
        ))
      }
    </div>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    rongliang: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteCustomer: PropTypes.func.isRequired,
};

export default CustomerList;

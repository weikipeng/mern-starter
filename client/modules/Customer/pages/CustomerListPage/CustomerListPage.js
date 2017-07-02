import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import CustomerList from '../../components/CustomerList';


// Import Actions
import { fetchCustomers, deleteCustomerRequest } from '../../CustomerActions';


// Import Selectors
import { getCustomers } from '../../CustomerReducer';

class CustomerListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }

  handleDeleteCustomer = customer => {
    if (confirm('Do you want to delete this customer')) { // eslint-disable-line
      this.props.dispatch(deleteCustomerRequest(customer));
    }
  };

  handleAddCustomer = (name, title, content) => {
    this.props.dispatch(toggleAddCustomer());
    this.props.dispatch(addCustomerRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <h1>好的好的</h1>
        <p>好的好的</p>
        <p>好的好的</p>
        <CustomerList handleDeleteCustomer={this.handleDeleteCustomer} customers={this.props.customers} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
CustomerListPage.need = [() => { return fetchCustomers(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    customers: getCustomers(state),
  };
}

CustomerListPage.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

CustomerListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CustomerListPage);

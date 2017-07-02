import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import CustomerCreateWidget from '../../components/CustomerCreateWidget/CustomerCreateWidget';

// Import Actions
import { addCustomerRequest, fetchCustomers, deleteCustomerRequest } from '../../CustomerActions';


class CustomerListPage extends Component {
  render() {
    return (
        <CustomerCreateWidget addCustomer={this.handleAddCustomer} showAddCustomer={this.props.showAddCustomer} />
    );
  }
}

// Actions required to provide data for this component to render in sever side.
// CustomerListPage.need = [() => { return fetchCustomers(); }];

//Retrieve data from store as props
function mapStateToProps(state) {
  return {
  };
}

CustomerListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

CustomerListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CustomerListPage);

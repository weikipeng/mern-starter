import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import CustomerCreateWidget from '../../components/CustomerCreateWidget/CustomerCreateWidget';

// Import Actions
import { addCustomerRequest, fetchCustomers, deleteCustomerRequest } from '../../CustomerActions';

// Big tits Mikuru Shiina provides superb Asian blowjob
//椎名未来（椎名みくる,Mikuru Shiina）出道作
//http://cdn2.javhd.com/thumbs/1-mkd-s89-kaori-maeda-kirari-89/thumbs/special/thumb1.gif
//前田香织 MKBD-S89
//http://cdn2.javhd.com/thumbs/3-smbd-115-miku-ohashi-s-model-115/thumbs/special/video.mp4
//http://cdn2.javhd.com/thumbs/1-skyhd-109-fujikita-aoi-yuuna-harumoto-sky-angel-blue-vol-109/thumbs/special/video.mp4
//http://cdn2.javhd.com/thumbs/3-mcb3dbd-18-miho-ichiki-merci-beaucoup-18-glamorous-venus-m/thumbs/special/video.mp4
// http://cdn2.javhd.com/thumbs/1-mkd-s89-kaori-maeda-kirari-89/thumbs/special/thumb2.gif
//http://cdn2.javhd.com/thumbs/1-smbd-086-mikuru-shiina-s-model-86/thumbs/special/video.mp4
//http://cdn2.javhd.com/thumbs/1-lafbd-006-nami-aino-laforet-girl-6/thumbs/special/video.mp4
//http://cdn2.javhd.com/thumbs/4-smbd-38-ai-wakana-s-model-vol-38/thumbs/special/video.mp4
//http://cdn2.javhd.com/thumbs/2-lafbd-009-hikari-minami-asano-airi-minami-laforet-girl-9/thumbs/special/video.mp4
//aaa http://cdn2.javhd.com/thumbs/3-cwmbd-002-chinatsu-kurusu-catwalk-marijuana-vol-02/thumbs/special/video.mp4
//aaa http://cdn2.javhd.com/thumbs/4-cwpbd-115-kaori-maeda-catwalk-poison-115/thumbs/special/video.mp4
//aaa http://cdn2.javhd.com/thumbs/2-skyhd-102-ren-azumi-sky-angel-blue-vol-102/thumbs/special/video.mp4
//http://cdn2.javhd.com/thumbs/2-cwpbd-129-saya-niiyama-catwalk-poison-129/thumbs/special/video.mp4
// aaa http://cdn2.javhd.com/thumbs/2-skyhd-120-nami-itoshino-sky-angel-blue-vol-116/thumbs/special/video.mp4
// http://cdn2.javhd.com/thumbs/3-mk3d2dbd-05-mikuru-shiina-big-cum-fuck/thumbs/special/video.mp4
// http://cdn2.javhd.com/thumbs/3-lafbd-52-nana-nakamura-laforet-girl-52/thumbs/special/video.mp4
// http://cdn2.javhd.com/thumbs/1-mcb3dbd-32-miu-suzuha-3d-merci-beaucoup-32/thumbs/special/video.mp4
//http://cdn2.javhd.com/thumbs/3-sm3d2dbd-21-yume-mizuki-s-model-dv-21/thumbs/special/video.mp4
class CustomerListPage extends Component {
  handleAddCustomer = (customer) => {
    this.props.dispatch(addCustomerRequest(customer));
  };

  render() {
    return (
        <CustomerCreateWidget addCustomer={this.handleAddCustomer} />
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

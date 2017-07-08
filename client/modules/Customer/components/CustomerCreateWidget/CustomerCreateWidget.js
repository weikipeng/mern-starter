import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import {Form,FormGroup, ControlLabel,FormControl,HelpBlock} from 'react-bootstrap'
import {Grid,Row,Col} from 'react-bootstrap'
import {PanelGroup,Panel} from 'react-bootstrap'
import {Button,Radio} from 'react-bootstrap'
// Import Style
// import styles from './CustomerCreateWidget.css';

export class CustomerCreateWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
      value: ''
    };
    this.customerRef = {

    };
  }

  handleSelect = (activeKey)=> {
      this.setState({ activeKey });
  };

  getValidationState=() => {
    const length = this.state.value.length;
    if (length > 1) return 'success';
    else return 'warning';
  };

  handleChange = (e)=> {
    this.setState({ value: e.target.value });
  };

  addCustomer = () => {
    // const nameRef = this.refs.name;
    // const titleRef = this.refs.title;
    // const contentRef = this.refs.content;
    // if (nameRef.value && titleRef.value && contentRef.value) {
    //   this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
    //   nameRef.value = titleRef.value = contentRef.value = '';
    // }


    // -----
    let customer = {};
    customer.name = this.customerRef.name.value;
    customer.idNum = this.customerRef.idNum.value;
    console.log("logDebug ======>名字："+JSON.stringify(customer));

    this.props.addCustomer(customer);
    // const nameRef = this.customerName;
    // const idNumRef = this.idNum;
    // const ruWangTypeRef = this.ruWangType;
    //
    // const nameRefValue =nameRef.value;
    // console.log("logDebug ======>名字："+ nameRef.value +
    //   "\nidNumRef:"+ idNumRef.value +
    //   "\n入网方式："+ruWangTypeRef.value
    // );
    // console.log("logDebug ======>ruWangTypeRef:"+ruWangTypeRef);
    // console.log("logDebug ======>名字："+nameRef.value);
  };

  render() {
    var labelWidth = 2;
    var formControlWidth = 9;
      return (
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
          <Panel header="客户信息" eventKey="1">
            <Form horizontal>

              <FormGroup controlId="formHorizontalUserName">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  姓名
                </Col>
                <Col md={formControlWidth}>
                  <FormControl type="text" placeholder="请输入用户姓名" defaultValue="默认名字"
                    inputRef={(ref) => {this.customerRef.name = ref}}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalIdNum">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  身份证号
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="请输入身份证号码"
                  inputRef={(ref) => {this.customerRef.idNum = ref}}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalAddress">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  地址
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="请输入客户地址" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPhone">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  电话
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="请输入客户联系电话" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalDianWang">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  所属电网
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="请输入客户所属电网" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalDianNum">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  电表户号
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="请输入客户电表户号" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalRuWangType">
                  <Col componentClass={ControlLabel} sm={labelWidth}>
                    上网方式
                  </Col>
                  <Col sm={formControlWidth}>
                    <Radio value="0" name="dianTypeRadioGroup" inline inputRef={(ref) => {this.customerRef.ruWangType = ref}}>
                      全额上网
                    </Radio>
                    {' '}
                    <Radio value="1" name="dianTypeRadioGroup" inline inputRef={(ref) => {this.customerRef.ruWangType = ref}}>
                      自发自用，余电上网
                    </Radio>
                  </Col>

                </FormGroup>

              <FormGroup controlId="formHorizontalGongLv">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  项目功率（KW）
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="请输入项目功率（KW）" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalSiNum">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  多晶硅数（片）
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="请输入多晶硅数（片）" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalWuDingType">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  屋顶类型
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="请输入屋顶类型" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalWaPianType">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  瓦片类型
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="请输入瓦片类型" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalCustomerQiTa">
                <Col componentClass={ControlLabel} sm={labelWidth}>
                  其他
                </Col>
                <Col sm={formControlWidth}>
                  <FormControl type="text" placeholder="其他" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle="primary" href="#" type="submit" onClick={this.addCustomer}>
                    添加
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Panel>

          <Panel header="银行信息" eventKey="2">
          开户行
          银行账号
          还款年限
          还款周期
          放款时间
          </Panel>

          <Panel header="产品信息" eventKey="3">
          组件 逆变器 电表箱 监控 进度（选择）
          </Panel>

        </PanelGroup>
      );
    }
}

CustomerCreateWidget.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(CustomerCreateWidget);



          // <FormGroup
          //   controlId="formBasicText"
          //   validationState={this.getValidationState()}>
          //
          //
          //       <Col xs={12} md={8}>
          //         <ControlLabel>姓名</ControlLabel>
          //
          //         <FormControl
          //           type="text"
          //           value={this.state.value}
          //           placeholder="Enter text"
          //           onChange={this.handleChange}/>
          //         <FormControl.Feedback />
          //         <HelpBlock>请输入客户姓名</HelpBlock>
          //       </Col>
          //
          //
          // </FormGroup>

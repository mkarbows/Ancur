import * as Actions from '../actions/actions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import BtcEth from '../components/BtcEth/BtcEth.js'

function mapStateToProps(state) {
  return {
    ethReceipt: state.reducers.ethReceipt,
    btcReceipt: state.reducers.btcReceipt
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BtcEth);

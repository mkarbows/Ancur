import * as Actions from '../actions/actions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Stamp from '../components/Stamp/Stamp.js'

function mapStateToProps(state) {
  return {
    // results: state.reducers.results,
    newStampId: state.reducers.newStampId,
    newStampHash: state.reducers.newStampHash,
    newStampToken: state.reducers.newStampToken,
    newStampTime: state.reducers.newStampTime,
    newStampBtcTime: state.reducers.newStampBtcTime,
    newStampEthTime: state.reducers.newStampEthTime
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stamp);

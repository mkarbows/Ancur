import * as Actions from '../actions/actions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Receipt from '../components/Receipt/Receipt.js'

function mapStateToProps(state) {
  return {
    error: state.reducers.error,
    isValid: state.reducers.isValid,
    stampId: state.reducers.stampId,
    stampHash: state.reducers.stampHash,
    btcMerkleRoot: state.reducers.btcMerkleRoot,
    ethMerkleRoot: state.reducers.ethMerkleRoot,
    btcAnchor: state.reducers.btcAnchor,
    btcAnchorId: state.reducers.btcAnchorId,
    btcAnchorType: state.reducers.btcAnchorType,
    ethAnchor: state.reducers.ethAnchor,
    ethAnchorId: state.reducers.ethAnchorId,
    ethAnchorType: state.reducers.ethAnchorType
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);

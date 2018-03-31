import * as Actions from '../actions/actions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Receipt from '../components/Receipt/Receipt.js'

function mapStateToProps(state) {
  return {
    results: state.reducers.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);

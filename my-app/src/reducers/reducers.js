import { STAMP_DOC_RESULTS, PROVE_RECEIPT_RESULTS } from '../actions/actions.js';

const initialState = {
  results: '',
  receiptResults: ''
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case STAMP_DOC_RESULTS:
      return { ...state, results: "Token:  " +
        action.data.data.token + "  Id:  " + action.data.data.id + "  Hash:  " + action.data.data.hash }
    case PROVE_RECEIPT_RESULTS:
      return { ...state, receiptResults: "Test Succeeded!  " +
    /*action.data.data[0].receipts.btc.merkleRoot*/ + action.data }
    default:
      return state
  }
}

export default reducers;

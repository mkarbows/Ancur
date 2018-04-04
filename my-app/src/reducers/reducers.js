import { STAMP_DOC_RESULTS, PROVE_RECEIPT_RESULTS } from '../actions/actions.js';

const initialState = {
  results: '',
  receiptResults: '',
  ethReceipt: '',
  isValid: ''
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case STAMP_DOC_RESULTS:
      return { ...state, results: "Token:  " +
        action.data.data.token + "  Id:  " + action.data.data.id + "  Hash:  " + action.data.data.hash }
    case PROVE_RECEIPT_RESULTS:
      return { ...state, /*receiptResults: "Test Succeeded!  " +  "anchors:  "+ action.data.anchors[0] + "  merkleRoot:  " + action.data.merkleRoot + "  targetHash:  " + action.data.targetHash + "  type:  " + action.data.type + "  proof0:  " + action.data.proof[0].right,*/ /*ethReceipt: "ethReceipt: " + JSON.stringify(action.data[0].receipts.eth)*/ isValid: "Yes! Valid on the Bitcoin block! " + action.data }
    default:
      return state
  }
}

export default reducers;

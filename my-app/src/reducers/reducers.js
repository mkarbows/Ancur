import {
  STAMP_DOC_RESULTS,
  PROVE_RECEIPT_RESULTS,
  GET_RECEIPTS_RESULTS
} from '../actions/actions.js';

const initialState = {
  results: '',
  receiptResults: '',
  btcReceipt: '',
  ethReceipt: '',
  isValid: '',
  stampId: '',
  stampHash: '',
  btcMerkleRoot: '',
  ethMerkleRoot: '',
  btcAnchor: '',
  ethAnchor: ''
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case STAMP_DOC_RESULTS:
      return { ...state, results: "Token:  " +
        action.data.data.token + "  Id:  " + action.data.data.id + "  Hash:  " + action.data.data.hash }
    case PROVE_RECEIPT_RESULTS:
      return { ...state, /*receiptResults: "Test Succeeded!  " +  "anchors:  "+ action.data.anchors[0] + "  merkleRoot:  " + action.data.merkleRoot + "  targetHash:  " + action.data.targetHash + "  type:  " + action.data.type + "  proof0:  " + action.data.proof[0].right,*/ /*ethReceipt: "ethReceipt: " + JSON.stringify(action.data[0].receipts.eth)*/ isValid: "Yes! Valid on the Bitcoin block! " + action.data }
    case GET_RECEIPTS_RESULTS:
      return { ...state,
        /*receiptResults: "getReceipt results: " + JSON.stringify(action.data),*/
        /*btcReceipt: "  Bitcoin Receipt:  " + JSON.stringify(action.data.receipts.btc),*/
        /*ethReceipt: "  Ethereum Receipt:  " + JSON.stringify(action.data.receipts.eth),*/
        stampId: action.data.id,
        stampHash: action.data.hash,
        btcMerkleRoot: action.data.receipts.btc.merkleRoot,
        btcAnchor: JSON.stringify(action.data.receipts.btc.anchors[0]),
        ethMerkleRoot: action.data.receipts.eth.merkleRoot,
        ethAnchor: JSON.stringify(action.data.receipts.eth.anchors[0])
      }
    default:
      return state
  }
}

export default reducers;

import {
  STAMP_DOC_RESULTS,
  PROVE_RECEIPT_RESULTS,
  GET_RECEIPTS_RESULTS
} from '../actions/actions.js';

const initialState = {
  // results: '',
  // receiptResults: '',
  // btcReceipt: '',
  // ethReceipt: '',
  newStampId: '',
  newStampHash: '',
  newStampToken: '',
  newStampTime: '',
  newStampBtcTime: '',
  newStampEthTime: '',
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
      return { ...state, /*results: "Token:  " +
        action.data.data.token + "  Id:  " + action.data.data.id + "  Hash:  " + action.data.data.hash*/
        newStampId: action.data.data.id,
        newStampHash: action.data.data.hash,
        newStampToken: action.data.data.token,
        newStampTime: action.data.data.time,
        newStampBtcTime: action.data.data.receipts.btc,
        newStampEthTime: action.data.data.receipts.eth
      }
    case PROVE_RECEIPT_RESULTS:
      return { ...state, isValid: "Yes! Valid on the Bitcoin block! " + action.data }
    case GET_RECEIPTS_RESULTS:
      return { ...state,
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

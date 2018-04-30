import {
  STAMP_DOC_RESULTS,
  PROVE_RECEIPT_RESULTS,
  GET_RECEIPTS_RESULTS
} from '../actions/actions.js';

const initialState = {
  error: '',
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
  btcAnchorId: '',
  btcAnchorType: '',
  ethAnchorId: '',
  ethAnchorType: ''
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case STAMP_DOC_RESULTS:
      return { ...state,
        newStampId: action.data.data.id,
        newStampHash: action.data.data.hash,
        newStampToken: action.data.data.token,
        newStampTime: action.data.data.time,
        newStampBtcTime: action.data.data.receipts.btc,
        newStampEthTime: action.data.data.receipts.eth
      }
    case PROVE_RECEIPT_RESULTS:
      return { ...state, isValid: "" + action.data, error: action.data }
    case GET_RECEIPTS_RESULTS:
      return { ...state,
        stampId: action.data.id,
        stampHash: action.data.hash,
        btcMerkleRoot: action.data.receipts.btc.merkleRoot,
        btcAnchorId: action.data.receipts.btc.anchors[0].sourceId,
        btcAnchorType: action.data.receipts.btc.anchors[0].type,
        ethMerkleRoot: action.data.receipts.eth.merkleRoot,
        ethAnchorId: action.data.receipts.eth.anchors[0].sourceId,
        ethAnchorType: action.data.receipts.eth.anchors[0].type,
      }
    default:
      return state
  }
}

export default reducers;

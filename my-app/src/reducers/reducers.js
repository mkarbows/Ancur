import { STAMP_DOC_RESULTS, PROVE_RECEIPT_RESULTS } from '../actions/actions.js';

const initialState = {
  results: '',
  stampId: ''
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case STAMP_DOC_RESULTS:
      // changed it to return the id that is returned by stampery after the document is stamped
      return { ...state, results: "Test Succeeded!  " +
        "stamp id: " + action.data.id + " stamp token: " + action.data.token }
    case PROVE_RECEIPT_RESULTS:
    // need to change this to return the correct thing.... this is still not giving me what i want exactly
      return { ...state, results: "Test Succeeded!  " +
      "proveReceipt btc: " + action.data.btc +
      " prove eth: " + action.data.eth }
    default:
      return state
  }
}

export default reducers;

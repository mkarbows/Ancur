import { EXPRESS_TEST_RESULTS, STAMP_DOC_RESULTS, PROVE_RECEIPT_RESULTS, EXPRESS_TEST_ERROR, DB_TEST_ERROR } from '../actions/actions.js';

const initialState = {
  results: ''
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case EXPRESS_TEST_RESULTS:
      return { ...state, results: "Test Succeeded!  " + action.data }
    case STAMP_DOC_RESULTS:
      // changed it to return the id that is returned by stampery after the document is stamped
      return { ...state, results: "Test Succeeded!  " +
        "stamp id: " + action.data.id + " stamp token: " + action.data.token }
    case PROVE_RECEIPT_RESULTS:
    // need to change this to return the correct thing.... this is still not giving me what i want exactly
      return { ...state, results: "Test Succeeded!  " +
      "proveReceipt btc: " + action.data.btc +
      " prove eth: " + action.data.eth }
    case EXPRESS_TEST_ERROR:
      return { ...state, results: "Test Failed!  " + action.data }
    case DB_TEST_ERROR:
      return { ...state, results: "Test Failed!  " + action.data }
    default:
      return state
  }
}

export default reducers;

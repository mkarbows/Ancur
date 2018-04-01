import { STAMP_DOC_RESULTS, PROVE_RECEIPT_RESULTS } from '../actions/actions.js';

const initialState = {
  results: '',
  receiptResults: ''
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case STAMP_DOC_RESULTS:
      // changed it to return the id that is returned by stampery after the document is stamped
      return { ...state, results: "Token:  " +
        action.data.data.token + "  Id:  " + action.data.data.id }
    case PROVE_RECEIPT_RESULTS:
    // // need to change this to return the correct thing.... this is still not giving me what i want exactly
      return { ...state, receiptResults: "Test Succeeded!  " +
      action.data }
    default:
      return state
  }
}

export default reducers;

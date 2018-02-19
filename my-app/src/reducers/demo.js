import { EXPRESS_TEST_RESULTS, STAMP_DOC_RESULTS, PROVE_RECEIPT_RESULTS, EXPRESS_TEST_ERROR, DB_TEST_ERROR } from '../actions';

const initialState = {
  results: ''
}

const demo = (state = initialState, action) => {
  switch (action.type) {
    case EXPRESS_TEST_RESULTS:
      return { ...state, results: "Test Succeeded!  " + action.data }
    case STAMP_DOC_RESULTS:
      // changed it to return the id that is returned by stampery after the document is stamped
      return { ...state, results: "Test Succeeded!  " + action.data.id }
    case PROVE_RECEIPT_RESULTS:
    // need to change this to return the correct thing
      return { ...state, results: "Test Succeeded!  " + action.data }
    case EXPRESS_TEST_ERROR:
      return { ...state, results: "Test Failed!  " + action.data }
    case DB_TEST_ERROR:
      return { ...state, results: "Test Failed!  " + action.data }
    default:
      return state
  }
}

export default demo;

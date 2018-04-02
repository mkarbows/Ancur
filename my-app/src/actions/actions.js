import axios from 'axios';

// export const EXPRESS_TEST_START = "EXPRESS_TEST_START";
// export const expressTestStart = () => {
//   return { type: EXPRESS_TEST_START }
// }
//
// export const EXPRESS_TEST_RESULTS = "EXPRESS_TEST_RESULTS";
// export const expressTestResults = (data) => {
//   return { type: EXPRESS_TEST_RESULTS, data }
// }
//
// export const EXPRESS_TEST_ERROR = "EXPRESS_TEST_ERROR";
// export const expressTestError = (data) => {
//   return { type: EXPRESS_TEST_ERROR, data }
// }
//
// export const EXPRESS_TEST = "EXPRESS_TEST";
// export const expressTest = () => {
//   return dispatch => {
//     dispatch(expressTestStart());
//     axios.get(`/api/express-test`)
//       .then(res => dispatch(expressTestResults(JSON.stringify(res.data))))
//       .catch(err => dispatch(expressTestError(err)))
//
//   }
// }

// export const DB_TEST_START = "DB_TEST_START";
// export const dbTestStart = () => {
//   return { type: DB_TEST_START }
// }
// export const DB_TEST_RESULTS = "DB_TEST_RESULTS";
// export const dbTestResults = (data) => {
//   return { type: DB_TEST_RESULTS, data }
// }
// export const DB_TEST_ERROR = "DB_TEST_ERROR";
// export const dbTestError = (data) => {
//   return { type: DB_TEST_ERROR, data }
// }
//
// export const DB_TEST = "DB_TEST"
// export const dbTest = () => {
//   return dispatch => {
//     dispatch(dbTestStart());
//     axios.get(`/api/products`)
//       .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
//       .catch(err => dispatch(dbTestError(err)))
//
//   }
// }

export const STAMP_DOC_START = "STAMP_DOC_START";
export const stampDocStart = () => {
  return { type: STAMP_DOC_START }
}
export const STAMP_DOC_RESULTS = "STAMP_DOC_RESULTS";
export const stampDocResults = (data) => {
  return { type: STAMP_DOC_RESULTS, data }
}
export const STAMP_DOC_ERROR = "STAMP_DOC_ERROR";
export const stampDocError = (data) => {
  return { type: STAMP_DOC_ERROR, data }
}

export const STAMP_DOC = "STAMP_DOC";
export const stampDoc = (input) => {
  return dispatch => {
    dispatch(stampDocStart());
    axios.get(`/api/callStampMethod/` + input)
      .then(res => dispatch(stampDocResults(res)))
      .catch(err => dispatch(stampDocError(err)))

  }
}

export const PROVE_RECEIPT_START = "PROVE_RECEIPT_START";
export const proveReceiptStart = () => {
  return { type: PROVE_RECEIPT_START }
}
export const PROVE_RECEIPT_RESULTS = "PROVE_RECEIPT_RESULTS";
export const proveReceiptResults = (data) => {
  return { type: PROVE_RECEIPT_RESULTS, data }
}
export const PROVE_RECEIPT_ERROR = "PROVE_RECEIPT_ERROR";
export const proveReceiptError = (data) => {
  return { type: PROVE_RECEIPT_ERROR, data }
}

export const PROVE_RECEIPT = "PROVE_RECEIPT";
export const proveReceipt = (id) => {
  return dispatch => {
    dispatch(proveReceiptStart());
    axios.get(`/api/callReceiptMethod/` + id )
      .then(res => dispatch(proveReceiptResults(res.data)))
      .catch(err => dispatch(proveReceiptError(err)))

  }
}

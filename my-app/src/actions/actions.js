import axios from 'axios';

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
// JSON.stringify(res.data)
export const PROVE_RECEIPT = "PROVE_RECEIPT";
export const proveReceipt = (id) => {
  return dispatch => {
    dispatch(proveReceiptStart());
    axios.get(`/api/callProvingMethod/` + id )
      .then(res => dispatch(proveReceiptResults(res.data)))
      .catch(err => dispatch(proveReceiptError(err)))

  }
}

export const GET_RECEIPTS_START = "GET_RECEIPTS_START";
export const getReceiptsStart = () => {
  return { type: GET_RECEIPTS_START }
}
export const GET_RECEIPTS_RESULTS = "GET_RECEIPTS_RESULTS";
export const getReceiptsResults = (data) => {
  return { type: GET_RECEIPTS_RESULTS, data }
}
export const GET_RECEIPTS_ERROR = "GET_RECEIPTS_ERROR";
export const getReceiptsError = (data) => {
  return { type: GET_RECEIPTS_ERROR, data }
}
// JSON.stringify(res.data)
export const GET_RECEIPTS = "GET_RECEIPTS";
export const getReceipts = (id) => {
  return dispatch => {
    dispatch(getReceiptsStart());
    axios.get(`/api/getReceipts/` + id )
      .then(res => dispatch(getReceiptsResults(res.data)))
      .catch(err => dispatch(getReceiptsError(err)))

  }
}

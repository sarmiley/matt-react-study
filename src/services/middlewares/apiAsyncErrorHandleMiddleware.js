import { isRejectedWithValue } from '@reduxjs/toolkit'

const apiAsyncErrorHandleMiddleware = ({ dispatch }) => (next) => (action) => {
 if (isRejectedWithValue(action)) {
  const httpCode = action.payload?.originalStatus || action.payload?.status
   console.log(`http Error`);
   console.log(action);
   if (httpCode) {
    if (httpCode === 'FETCH_ERROR') {
      console.log(httpCode);
    } else {
      // 伺服器回應非200的狀態碼
      console.log(`not FETCH_ERROR: ${httpCode}`);
    }
  }
 }
 return next(action)
}

export default apiAsyncErrorHandleMiddleware
import { configureStore } from '@reduxjs/toolkit'
import apiAsyncErrorHandleMiddleware from '../services/middlewares/apiAsyncErrorHandleMiddleware'
import { baseApiService } from 'services/baseApiService'

import pokemonReducer from 'slice/pokemon'
import pokemonStorageReducer from 'slice/pokemonStorage'
import actionCounterReducer from 'slice/actionCounter'

const middlewareHandler = (getDefaultMiddleware) => {
  const middleware = [
    apiAsyncErrorHandleMiddleware,
    baseApiService.middleware
  ]

  return getDefaultMiddleware().concat(middleware)
}


export default configureStore({
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
  reducer: {
    pokemon: pokemonReducer,pokemonStorageReducer,actionCounterReducer,
    [baseApiService.reducerPath]: baseApiService.reducer,
  },
});
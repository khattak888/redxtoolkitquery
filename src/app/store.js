import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from '../services/post'

export const store  = configureStore({
    reducer:{
         // Add the generated reducer as a specific top-level slice
        [postApi.reducerPath]: postApi.reducer,
    },
    //ye advantage provide karta ha catching,polling,invalidation and other useful 
    //rtk query features.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})
//refatching k kaaam aata.
setupListeners(store.dispatch)
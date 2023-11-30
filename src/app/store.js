import {configureStore} from '@reduxjs/toolkit';
import { AlbumApi } from './services/AlbumApi';

const store=configureStore({
    reducer:{
        [AlbumApi.reducerPath]:AlbumApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(AlbumApi.middleware),
    
});

export default store;
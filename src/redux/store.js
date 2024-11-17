import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { userReducer } from "./auth/auth.reducer.js";
import { cardReducer } from "./card/card.reducer";


const cardsConfig = {
    key: 'card',
    storage,
    whitelist: ['favorites']
};

export const store = configureStore({
    reducer: {
        user: userReducer,
        card: persistReducer(cardsConfig, cardReducer),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
});

export const persistor = persistStore(store);
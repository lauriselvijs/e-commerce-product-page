import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CartName } from "../features/Cart/Cart.slice";
import { HamburgerMenuName } from "../features/HamburgerMenu/HamburgerMenu.slice";
import { ProductGalleryName } from "../features/ProductGallery/ProductGallery.slice";
import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [HamburgerMenuName, CartName, ProductGalleryName],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

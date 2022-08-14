import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas/root-saga";

import authReducer from "./slices/auth";
import dislinktReducer from "./slices/dislinkt";
import companyReducer from "./slices/company";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  // ??????
  reducer: {
    auth: authReducer,
    dislinkt: dislinktReducer,
    company: companyReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;

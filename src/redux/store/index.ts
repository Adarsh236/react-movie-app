import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { rootReducer } from '../reducers';
import { ApiActionTypes } from '../actions/api';

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppActionsType = ApiActionTypes;
export type AppDispatch = typeof store.dispatch;

// For debug only
/*const logger = createLogger();

 const middleware = applyMiddleware(
  thunk as ThunkMiddleware<AppStateType, AppActionsType>,
  logger
); */
const middleware = applyMiddleware(
  thunk as ThunkMiddleware<AppStateType, AppActionsType>
);

const store = createStore<
  AppStateType,
  AppActionsType,
  Record<string, unknown>,
  Record<string, unknown>
>(rootReducer, middleware);

export { store };

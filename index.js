// Libraries
import redux, { applyMiddleware, combineReducers } from 'redux'
import reduxLogger from 'redux-logger'

// Default Imports
import { buyCake } from './ActionCreators.js'
import { buyBiscuit } from './ActionCreators.js'
import { CakeReducer } from './Reducer.js'
import { biscuitReducer } from './Reducer.js'

// combine Reducers
const reducer = combineReducers({
  cake: CakeReducer,
  Biscuit: biscuitReducer,
})

// Logger
const logger = reduxLogger.createLogger()

// Store
const store = redux.createStore(reducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {})

// Dispatch
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyBiscuit())
store.dispatch(buyBiscuit())
store.dispatch(buyBiscuit())
unsubscribe()

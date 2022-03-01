import redux from 'redux'
import { buyCake } from './ActionCreators.js'
import { buyBiscuit } from './ActionCreators.js'
import { CakeReducer } from './Reducer.js'
import { biscuitReducer } from './Reducer.js'

const reducer = redux.combineReducers({
  cake: CakeReducer,
  Biscuit: biscuitReducer,
})
const store = redux.createStore(reducer)
console.log('Initial State', store.getState())
// console.log(store)
const unsubscribe = store.subscribe(() =>
  console.log('Updated State', store.getState())
)
// store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyBiscuit())
store.dispatch(buyBiscuit())
store.dispatch(buyBiscuit())
unsubscribe()

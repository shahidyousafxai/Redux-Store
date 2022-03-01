import redux from 'redux'
import { BUY_CAKE } from './Actions.js'
import { BUY_BISCUIT } from './Actions.js'
import { buyCake } from './ActionCreators.js'
import { buyBiscuit } from './ActionCreators.js'
import { initialState } from './InitialState.js'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 }
    case BUY_BISCUIT:
      return { ...state, numOfBiscuit: state.numOfBiscuit - 1 }
    default: {
      return state
    }
  }
}
const store = redux.createStore(reducer)
console.log('Initial State', store.getState())
// console.log(store)
// const unsubscribe = store.subscribe(() =>
//   console.log('Updated State', store.getState())
// )
store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
// unsubscribe()
store.dispatch(buyBiscuit())
store.dispatch(buyBiscuit())
store.dispatch(buyBiscuit())

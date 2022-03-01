import { initialCakeState } from './InitialState.js'
import { initialBiscuitState } from './InitialState.js'
import { BUY_CAKE } from './Actions.js'
import { BUY_BISCUIT } from './Actions.js'

export const CakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 }
    default: {
      return state
    }
  }
}

export const biscuitReducer = (state = initialBiscuitState, action) => {
  switch (action.type) {
    case BUY_BISCUIT:
      return { ...state, numOfBiscuit: state.numOfBiscuit - 1 }
    default: {
      return state
    }
  }
}

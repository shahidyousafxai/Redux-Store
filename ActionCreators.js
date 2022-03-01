import { BUY_CAKE } from './Actions.js'
import { BUY_BISCUIT } from './Actions.js'

export const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'Action',
  }
}

export const buyBiscuit = () => {
  return {
    type: BUY_BISCUIT,
    info: 'Action',
  }
}

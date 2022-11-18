import { getFruits } from '../apis/fruits'
import { getDragonBallPeeps } from '../apis/Dragon-ball-super'

export const SET_FRUITS = 'SET_FRUITS'

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return getFruits().then((fruits) => {
      dispatch(setFruits(fruits))
    })
  }
}

//////////////////////

export const SET_CHAR = 'SET_CHAR'
export const SELECT_CHAR = 'SELECT_CHAR'
export const DECLARE_WINNER = 'DECLARE_WINNER'

export function setChar(char) {
  return {
    type: SET_CHAR,
    payload: char.map((fighter) => {
      return { ...fighter, strength: Math.floor(Math.random() * 100) }
    }),
  }
}

export function declareWinner(winner) {
  return {
    type: DECLARE_WINNER,
    payload: winner,
  }
}

export function selectChar(id, index) {
  return {
    type: SELECT_CHAR,
    payload: { id, index },
  }
}

export function fetchChar() {
  return (dispatch) => {
    // goes to api first - dispatch in a displatch (dispatchception)
    // "This maks it 'thunky'!# "
    return getDragonBallPeeps().then((char) => {
      // console.log(char)
      dispatch(setChar(char))
    })
  }
}

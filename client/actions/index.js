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

export function setChar(char) {
  return {
    type: SET_CHAR,
    payload: char,
  }
}

export function fetchChar() {
  return (dispatch) => {
    return getDragonBallPeeps().then((char) => {
      dispatch(setChar(char))
    })
  }
}



import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectChar, setChar } from '../actions'

import { InputBase } from '@mantine/core'

export default function Character() {
  const characters = useSelector((state) => state.characters)
  const selection = useSelector((state) => state.selection)
  // const characterId = selection[props.index]
  // const character1 = characters.find((found) =>
  //   console.log('found.id', selection[0] === found.id)
  // )
  const character1 = characters.find(
    (found) => found.id === Number(selection[0])
  )
  const character2 = characters.find((found) => found.id === +selection[1])
  console.log(character1)
  console.log(character2)

  const dispatch = useDispatch()

  //

  // TESTING STATION
  console.log('TESTING STATION:')

  export function determineWinner() {
    if (character1.strength > character2.strength) {
      return `${character1.name} WON AGAINST ${character2.name}`
    } else if (character1.strength < character2.strength) {
      return `${character2.name} WON AGAINST ${character1.name}`
    } else {
      return `ITS A DRAW`
    }
  }

  // console.log(setChar(1))

  return <>{/* {character && <img src={character.imageUrl} alt="" />} */}</>
}

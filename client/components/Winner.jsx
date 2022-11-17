import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectChar } from '../actions'

import { InputBase } from '@mantine/core'

export default function Character(props) {
  const characters = useSelector((state) => state.characters)
  const selection = useSelector((state) => state.selection)
  const characterId = selection[props.index]
  const character = characters.find((found) => found.id == characterId)
  const dispatch = useDispatch()


  return (
    <>
    {character && <img src={character.imageUrl} alt="" />}
    </>
  )
}
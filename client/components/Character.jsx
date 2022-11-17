import React from 'react'
import { useSelector } from 'react-redux'

export default function Character() {
  const characters = useSelector(state => state.characters)
  console.log(characters)

  // render drop down
  // when drop down changes
  // dispatch action to update selected character in redux

  return (
    <div>Character</div>
  )
}

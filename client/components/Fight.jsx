import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mantine/core'
// const determineWinner = require('./Winner')
import { declareWinner } from '../actions'

export default function Fight() {
  let [loading, setLoading] = useState(false)
  const [buttonName, setButtonName] = useState(`FIGHT`)

  const characters = useSelector((state) => state.characters)
  const selection = useSelector((state) => state.selection)
  const dispatch = useDispatch()

  const character1 = characters.find((found) => found.id === +selection[0])
  const character2 = characters.find((found) => found.id === +selection[1])
  // console.log('character 1', character1)
  // console.log('character 2', character2)

  // console.log('character 1 strength', character1?.strength)
  // console.log('character 2 strength', character2?.strength)

  // TESTING STATION
  // console.log('TESTING STATION:', 'char1: strength', character1.strength)

  function determineWinner() {
    let result
    if (character1?.strength > character2?.strength) {
      result = character1
    } else if (character1?.strength < character2?.strength) {
      result = character2
    } else if (character1?.strength === character2?.strength) {
      result = 'ITS A DRAW'
    } else {
      null
    }
    dispatch(declareWinner(result))
  }

  // console.log(determineWinner())

  function handleClick() {
    // click: now needs to load: expect true
    setLoading(true)
    setButtonName('Fight in progess')

    setTimeout(() => {
      setLoading(false)
      setButtonName('FIGHT')
      determineWinner()
    }, '2000')
  }

  return (
    <div className="button-center">
      <Button
        loading={loading}
        onClick={handleClick}
        variant="light"
        color="pink"
        radius="xl"
        size="xl"
      >
        {buttonName}
      </Button>
    </div>
  )
}

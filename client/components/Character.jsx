import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { InputBase } from '@mantine/core'
import InputMask from 'react-input-mask'

export default function Character() {
  const characters = useSelector((state) => state.characters)

  const [characterOne, setCharacterOne] = useState({})

  const [characterTwo, setCharacterTwo] = useState({})
  // console.log(characters)

  // render drop down
  // when drop down changes
  // dispatch action to update selected character in redux

  function handleChange(event) {
    setCharacterOne({
      ...characterOne,
      [event.target.name]: event.target.value,
    })
    console.log(
      'name',
      event.target.name,
      'value',
      event.target.value,
      'event.target',
      event.target
    )
  }

  return (
    characters && (
      <>
        <div>
          <InputBase
            label="Custom native select"
            component="select"
            mt="md"
            onChange={handleChange}
          >
            {characters.map((char, i) => (
              <option key={i} value={char?.name}>
                {char?.name}
              </option>
            ))}
            {/* <option value="react">React</option>
            <option value="react">Angular</option>
            <option value="svelte">Svelte</option> */}
          </InputBase>

          <p>Character</p>
          {characters.map((char, i) => (
            // console.log('chars, i', char, i)
            // console.log('sometest', char?.imageUrl) */}
            <div key={i}>
              <img src={char?.imageUrl} alt="test" />
            </div>
          ))}
        </div>
      </>
    )
  )
}

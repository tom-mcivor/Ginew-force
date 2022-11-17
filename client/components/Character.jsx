import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { InputBase } from '@mantine/core'

export default function Character() {
  const characters = useSelector((state) => state.characters)

  const [characterOne, setCharacterOne] = useState({})

  const [characterTwo, setCharacterTwo] = useState({})
  // console.log(characters)

  // render drop down
  // when drop down changes
  // dispatch action to update selected character in redux

  // sets ID for char 1
  function handleChange(event) {
    const char1 = characters.find((found) => found.id == event.target.value)
    setCharacterOne(char1)
    console.log('char1', char1)
  }

  return (
    characters && (
      <>
        <div>
          <InputBase
            label="Custom native select"
            component="select"
            mt="md"
            name="FighterOne"
            onChange={handleChange}
          >
            {characters.map((char, i) => (
              <option key={i} value={char?.id}>
                {char?.name}
              </option>
            ))}
          </InputBase>

          <img src={characterOne.imageUrl} alt="" />
        </div>
      </>
    )
  )
}

//<p>Character</p>
//{characters.map((char, i) => (
// console.log('chars, i', char, i)
// console.log('sometest', char?.imageUrl) */}
//<div key={i}>
//  <img src={char?.imageUrl} alt="test" />
// </div>
//))}

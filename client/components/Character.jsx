import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { InputBase } from '@mantine/core'

export default function Character() {
  const characters = useSelector((state) => state.characters)

  // let randomNum = Math.floor(Math.random() * 10)

  let [characterOne, setCharacterOne] = useState(characters[Math.floor(Math.random() * 3)]) //id === randomNum // {1:2} // useState(characters[1])

  // characterOne = characters[randomNum]

  // console.log(characters, 'test')

  // console.log([characters[0][1]])

  // HELPPPPPPPPPPPPPPPPPPPPPPPPPPP:
  // function randomNumber() {
  //   return Math.floor(Math.random() * 125)
  // }

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
        <InputBase
          label="Fighter "
          component="select"
          mt="md"
          name="FighterOne"
          onChange={handleChange}
        >
          <option value="" disabled>
            Select your fighter
          </option>
          {characters.map((char, i) => (
            <option key={i} value={char?.id}>
              {char?.name}
            </option>
          ))}
        </InputBase>

        <img src={characterOne.imageUrl} alt="" />
      </>
    )
  )
}

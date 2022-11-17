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

  function handleChange(event) {
    const index = props.index
    const id = event.target.value
    dispatch(selectChar(id, index))
  }

  // let [characterOne, setCharacterOne] = useState(characters[1])

  // HELPPPPPPPPPPPPPPPPPPPPPPPPPPP:
  // let randomNum = Math.floor(Math.random() * 10)
  // characterOne = characters[randomNum]

    
  // render drop down
  // when drop down changes
  // dispatch action to update selected character in redux

  // sets ID for char 1

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

        {character && <img src={character.imageUrl} alt="" />}
      </>
    )
  )
}

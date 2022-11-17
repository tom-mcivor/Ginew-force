import React from 'react'
import { useSelector } from 'react-redux'

export default function Character() {
  const characters = useSelector(state => state.characters)
  // console.log(characters)

  // render drop down
  // when drop down changes
  // dispatch action to update selected character in redux

  return (
    characters &&<>
    <div>
      <p>Character</p>
      {characters.map((char, i) => (

          // console.log('chars, i', char, i) 
         // console.log('sometest', char?.imageUrl) */}
         <img key={i} src={char?.imageUrl} alt="test" />
        

    
      ))}
      <img src='https://i.ibb.co/cY94Ddp/Daishinkan.png'/>
    </div></>
  )
}

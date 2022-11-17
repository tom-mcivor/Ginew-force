import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, InputBase } from '@mantine/core'

export default function Fight() {
  const [boolean, setBoolean] = useState(false)

  function handleClick() {
    setBoolean(!boolean)
    
    // delay
    let delayInMilliseconds = 1000; //1 second

    setTimeout(function() {
      //your code to be executed after 1 second
    }, delayInMilliseconds);
    // envoke the calculate winner function test thing
    // make boolean button false again
  }

  return (
    <div className="button-center">
      <Button
        loading={boolean}
        onClick={handleClick}
        variant="light"
        color="pink"
        radius="xl"
        size="xl"
      >
        FIGHT
      </Button>
    </div>
  )
}

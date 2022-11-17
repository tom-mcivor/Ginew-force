import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@mantine/core'

export default function Fight() {
  let [loading, setLoading] = useState(false)
  const [buttonName, setButtonName] = useState(`FIGHT`)

  function handleClick() {
    // click: now needs to load: expect true
    setLoading(true)
    setButtonName('Fight in progess')

    setTimeout(() => {
      setLoading(false)
      setButtonName('FIGHT')
      // displayWinner()
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

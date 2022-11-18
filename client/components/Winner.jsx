import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectChar, setChar } from '../actions'

import { InputBase } from '@mantine/core'

export default function Winner() {
  const winner = useSelector((state) => state.winner)

  // console.log(setChar(1))

  return (
    <>
      {winner?.name}
    </>
  )
}

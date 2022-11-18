import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Winner() {
  const winner = useSelector((state) => state.winner)
  // console.log(winner)
  //   const [isWinnerEmpty, setIsWinnerEmpty] = useState(false)
  //   const [hasWonText, setHasWonText] = useState('')

  // function checking() {
  // if (winner?.strength) {
  //   return setHasWonText('has won')
  // }

  //   setHasWonText(`${winner?.name} has won`)

  return (
    <>
      <div className="winner-text">
        <h2>The winner is...</h2>
        <h3>{winner?.name}</h3>
      </div>
    </>
  )
}

//className={display}

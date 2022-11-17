import React, { useState, useEffect }from 'react'

import { fetchChar } from '../actions'

import { useDispatch, useSelector } from 'react-redux'

import Character from './Character'

function App() {
  
  const dispatch = useDispatch()
  
  // dispatch action to fetch character list
  useEffect(() => {
    dispatch(fetchChar())
    .catch((err) => {
      console.error(err)
    })
  }, [])

  


  // when fight is clicked
  // render winner

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Goku and Friends!</h1>

        <Character />
        <Character />
      </div>
    </>
  )
}

export default App

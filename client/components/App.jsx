import React, { useState, useEffect } from 'react'

import { fetchChar } from '../actions'

import { useDispatch, useSelector } from 'react-redux'

import Character from './Character'
import Fight from './Fight'

function App() {
  const dispatch = useDispatch()

  // dispatch action to fetch character list
  useEffect(() => {
    dispatch(fetchChar()).catch((err) => {
      console.error(err)
    })
  }, [])

  // when fight is clicked
  // render winner

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Goku and Friends!</h1>

        <div className="parent-char">
          <div className="child-char">
            <Character />
          </div>

          <div className="child-char">
            <div className="button-center">
              <Fight />
            </div>
          </div>

          <div className="child-char">{/* <Character /> */}</div>
        </div>
      </div>
    </>
  )
}

export default App

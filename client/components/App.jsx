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
        <h1 className="header-text">Ginew Force Fight Simulator</h1>

        <div className="parent-char">
          <div className="child-char">
            <Character index={0} />
          </div>

          <div className="child-char">
            <div className="button-center">
              <Fight />
            </div>
          </div>


          <div className="child-char">
            <Character index={1} />
            </div>

        </div>
      </div>
    </>
  )
}

export default App

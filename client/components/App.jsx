import React from 'react'
import Character from './Character'

function App() {
  
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  // dispatch action to fetch character list


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

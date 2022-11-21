import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../store'
import { fetchChar } from '../actions'

jest.mock('../actions')

fetchChar.mockImplementation(() => () => {})

test('page header includes Ginew', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getAllByRole('heading')
  expect(heading[0].innerHTML).toContain('Ginew')
})

test('we have x headings', () => {
  const Char = ['Winner']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ Char }))

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const h3 = screen.getAllByRole('heading')
  expect(h3).toHaveLength(3)
})

// test('dispatches fetchChar action', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   expect(fetchChar).toHaveBeenCalled()
// })

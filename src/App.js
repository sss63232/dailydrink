import React from 'react'
import { Provider } from 'react-redux'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

const store = configureStore()

function App () {
  return (
    <div className='App'>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App

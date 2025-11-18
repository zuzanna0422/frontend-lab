import { useReducer } from 'react'
import AppReducer from './AppReducer'
import AppContext from './AppContext'
import data from './data'

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, data || [])

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

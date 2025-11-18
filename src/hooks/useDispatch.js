import { useContext } from 'react'
import AppContext from '../data/AppContext'

function useDispatch() {
  return useContext(AppContext).dispatch
}

export default useDispatch

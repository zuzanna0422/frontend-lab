import { useContext } from 'react'
import AppContext from '../data/AppContext'

function useData() {
  return useContext(AppContext).items
}

export default useData

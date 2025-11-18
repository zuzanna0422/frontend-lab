const initialState = {
  data: [],
  initial: []
}

const compareStrings = (a = '', b = '', order = 'asc') => {
  const normalizedA = a.toString().toLowerCase()
  const normalizedB = b.toString().toLowerCase()
  if (normalizedA === normalizedB) return 0
  const direction = order === 'asc' ? 1 : -1
  return normalizedA > normalizedB ? direction : -direction
}

const compareNumbers = (a = 0, b = 0, order = 'asc') => {
  const direction = order === 'asc' ? 1 : -1
  if (a === b) return 0
  return a > b ? direction : -direction
}

function TableDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA': {
      const payload = Array.isArray(action.payload) ? action.payload : []
      return {
        data: payload,
        initial: [...payload]
      }
    }

    case 'SORT': {
      const { column, order } = action.payload || {}
      if (order === 'natural') {
        return { ...state, data: [...state.initial] }
      }

      const sorter = (a, b) => {
        switch (column) {
          case 'user':
            return compareStrings(a.user?.name, b.user?.name, order)
          case 'title':
            return compareStrings(a.post?.title, b.post?.title, order)
          case 'comments':
            return compareNumbers(a.comments?.length, b.comments?.length, order)
          default:
            return 0
        }
      }

      return { ...state, data: [...state.data].sort(sorter) }
    }

    default:
      return state
  }
}

export { initialState }
export default TableDataReducer

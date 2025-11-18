export default function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]

    case 'UPDATE_ITEM':
      return state.map((p) => (p.id === action.payload.id ? action.payload : p))

    case 'check':
      return state.map((p) => {
        if (p.id !== action.id) return p
        return { ...p, check: !p.check }
      })

    case 'rate':
      return state.map((p) => {
        if (p.id !== action.id) return p
        const current = Number.isFinite(p.rating) ? p.rating : 0
        const next = current >= 10 ? 0 : current + 1
        return { ...p, rating: next }
      })

    case 'delete':
      return state.filter((p) => p.id !== action.id)

    default:
      return state
  }
}

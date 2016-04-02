import { PAGE_FORWARD, PAGE_BACK } from '../constants/actionTypes'

export default (state = { current: 0, total: 0, size: 0 }, action) => {
  switch (action.type) {
    case PAGE_BACK:
      return { ...state, current: state.current - 1 }
    case PAGE_FORWARD:
      return { ...state, current: state.current + 1 }
    default:
      return state
  }
}

import { PAGE_FORWARD, PAGE_BACK } from '../constants/actionTypes'

export const pageForward = () => {
  return { type: PAGE_FORWARD }
}

export const pageBack = () => {
  return { type: PAGE_BACK }
}
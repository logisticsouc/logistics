import * as types from './types'

export const resetTransit = ({dispatch}) => {
  dispatch(types.RESETTRANSIT)
}
export const submitTransit = ({dispatch}, data) => {
  dispatch(types.SUBMIT_TRANSIT, data)
}

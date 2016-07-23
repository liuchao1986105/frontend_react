import { CHANGE_OPTIONS } from '../actions/types'
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'

const initialState = fromJS({page: 1, limit: 10, sortName:'-created_at'})

export default createReducer(initialState, {
  [CHANGE_OPTIONS]: (state, action) => state.merge(action.option)
})
import {
  TEMPLATE_LIST_REQUEST,
  TEMPLATE_LIST_SUCCESS,
  TEMPLATE_LIST_FAILURE,
  ADD_TEMPLATE_SUCCESS
} from '../actions/types'
import { createReducer } from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
  isFetching: false,
  isMore: true,
  items: [],
  pagecount: 0
})

export const templateList = createReducer(initialState,{
  [TEMPLATE_LIST_REQUEST]: (state,action)=>state.set('isFetching',true),
  [TEMPLATE_LIST_SUCCESS]: (state,action)=>{
    return state.merge({
      isFetching:false,
      // isMore: !(action.json.data.length < action.page),
      items: action.isAdd?state.get('items').concat(action.json.data):action.json.data,
      pagecount:action.json.count
    })
  },
  [TEMPLATE_LIST_FAILURE]: (state,action)=>state.set('isFetching',false),
  [ADD_TEMPLATE_SUCCESS]: (state,action)=>{
    return state.mergeDeep({
      errMsg:null,
      items: state.get('items').unshift(action.template)
    })
  },
})

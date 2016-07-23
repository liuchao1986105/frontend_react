import * as types from './types'
import api from '../api'

//显示提示消息
export const showMsg = (content, type='error')=>{
  return {
    type: types.SHOW_MSG,
    message: { content:content,type:type }
  }
}
export const hideMsg = ()=>({type: types.HIDE_MSG})

//获取apps
export const getApps = () =>{
  return {
    type: types.GET_APPS,
    promise: api.getApps()
  }
}
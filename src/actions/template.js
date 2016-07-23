import * as types from './types'
import api from '../api'
import { push } from 'react-router-redux'
import { showMsg } from './other'


//获取模板列表
export const getTemplateList = (isAdd = true) =>{
  return (dispatch,getState) => {
    const options = getState().options.toJS()
    return dispatch({
      type: types.TEMPLATE_LIST,
      limit: options.limit,
      page: options.page,
      promise: api.getTemplateList(options),
      isAdd: isAdd
    })
  }
}

//添加模板
function receiveAddTemplate(template) {
  return {
    type: types.ADD_TEMPLATE_SUCCESS,
    template: template
  }
}

export function addTemplate(template) {
  return (dispatch,getState)=>{
    return api.addNewTemplate(template)
      .then(response => ({json: response.data, status: response.statusText}))
      .then(({json,status}) => {
        if(status !== 'OK'){
          return dispatch(showMsg(json.error_msg || '添加模板失败'))
        }
        dispatch(receiveAddTemplate(json.data))
        dispatch(push('/dashboard/template'))
      }).catch(e=>{
        return dispatch(showMsg(e.data.error_msg || '添加模板失败'))
      })
  }
}


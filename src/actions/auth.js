import * as types from './types'
import { push } from 'react-router-redux'
import { saveCookie,getCookie,signOut } from '../utils/authService'
import { showMsg } from './other'
import api from '../api'
import { API_ROOT } from '../config'

//获取snslogins
export const getSnsLogins = ()=>{
  return {
    type: types.GET_SNSLOGINS,
    promise: api.getSnsLogins()
  }
}
//获取验证码
export const getCaptchaUrl = () =>{
  return {
    type: types.GET_CAPTCHAURL,
    captchaUrl: API_ROOT + 'users/getCaptcha?' + Math.random()
  }
}
//登录
function loginSuccess(token) {
  return {
    type: types.LOGIN_SUCCESS,
    token: token
  }
}

export function localLogin(userInfo) {
  return (dispatch,getState) =>{
    return api.localLogin(userInfo)
    .then(response => ({json: response.data, status: response.statusText}))
    .then(({json,status}) => {
      console.log("json:"+JSON.stringify(json) + " status:"+status)
      if(status !== 'OK'){
        //dispatch(getCaptchaUrl())
        return dispatch(showMsg(json.error_msg || '登录失败'))
      }
      //得到token,并存储
      console.log("token:"+json.token);
      saveCookie('token',json.token)
      //获取用户信息
      dispatch(getUserInfo(json.token))
      dispatch(loginSuccess(json.token))
      dispatch(push('/'))
    }).catch(err=>{
      //登录异常
     // dispatch(getCaptchaUrl())
     // console.log("err:"+JSON.stringify(err))
      return dispatch(showMsg(err.data.error_msg || '登录失败'))
    })
  }
}

export function signUp(userInfo) {
  return (dispatch,getState) =>{
    return api.signUp(userInfo)
    .then(response => ({json: response.data, status: response.statusText}))
    .then(({json,status}) => {
      if(status !== 'OK'){
        dispatch(getCaptchaUrl())
        return dispatch(showMsg(json.error_msg || '注册失败'))
      }
      //得到token,并存储
      saveCookie('token',json.token)
      //获取用户信息
      dispatch(getUserInfo(json.token))
      dispatch(loginSuccess(json.token))
      dispatch(push('/dashboard'))
    }).catch(err=>{
      dispatch(getCaptchaUrl())
      return dispatch(showMsg(err.data.error_msg || '注册失败'))
    })
  }
}

//获取用户信息
export const getUserInfo = (token = getCookie('token'))=>{
  return {
    type: types.GET_USERINFO,
    promise: api.getMe({
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
}

//退出登录
export function logout() {
  return dispatch => {
    signOut()
    dispatch({type: types.LOGOUT_USER})
    dispatch(push('/'))
  }
}
//修改用户资料
function successUpdateUser(user) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    user:user
  }
}
export function updateUser(userInfo) {
  return (dispatch,getState)=>{
    return api.mdUser(userInfo)
    .then(response => ({json: response.data, status: response.statusText}))
    .then(({json,status}) => {
      if(status !== 'OK'){
        return dispatch(showMsg(json.data && json.data.error_msg || '更新用户资料失败'))
      }
      dispatch(showMsg('更新用户资料成功','success'))
      return dispatch(successUpdateUser(json.data))

    }).catch(err=>{
      return dispatch(showMsg(err.data.error_msg || '更新用户资料失败'))
    })
  }
}

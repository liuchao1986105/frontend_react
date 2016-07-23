import cookie from 'react-cookie'
import { CookieDomain } from '../config'
let cookieConfig = {}
if(CookieDomain !== ''){
  cookieConfig = { path: CookieDomain }
}

export function saveCookie(name,value) {
  cookie.save(name, value)
  var coo = cookie.load(name)
}

export function getCookie(name) {
  return cookie.load(name)
}

export function removeCookie(name) {
  cookie.remove(name)
}

export function signOut() {
  cookie.remove('token')
}

export function isLogin() {
  return !!cookie.load('token')
}

export function redirectToBack(nextState, replace) {
  //已经登录则不进入
  if (isLogin()) {
    replace('/')
  }
}
export function redirectToLogin(nextState,replace) {
  if (!isLogin()) {
    replace('/login')
  }
}
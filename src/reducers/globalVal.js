import { 
  GET_CAPTCHAURL
} from '../actions/types'
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import { API_ROOT } from '../config'

export default createReducer(fromJS({
  captchaUrl: API_ROOT + 'users/getCaptcha'
}), {
  [GET_CAPTCHAURL]: (state, action) => state.set('captchaUrl',action.captchaUrl)
})
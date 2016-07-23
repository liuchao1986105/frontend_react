import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { articleList, articleDetail,prenextArticle } from './article'
import tagList from './tagList'
import commentList from './comment'
import auth from './auth'
import options from './options'
import sns from './sns'
import showmsg from './showmsg'
import globalVal from './globalVal'
import { templateList } from './template'

const rootReducer = combineReducers({
  globalVal,
  sns,
  tagList,
  articleList,
  articleDetail,
  commentList,
  prenextArticle,
  options,
  auth,
  showmsg,
  templateList,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer

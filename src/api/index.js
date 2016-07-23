import {UserResource,AuthResource,ArticleResource,TagResource,MobileResource,CommentResource,TemplateResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource('post', 'local/signin', data)
  },
  signUp: function (data) {
    return UserResource('post', 'signup', data)
  },
  getSnsLogins: function () {
    return UserResource('get', 'snsLogins')
  },
  getMe: function (data) {
    return UserResource('get', 'me', data)
  },
  mdUser: function (data) {
    return UserResource('put', 'mdUser', data)
  },
  getTagList:function () {
    return TagResource('get','getFrontTagList')
  },
  getApps:function () {
    return MobileResource('get','getApps')
  },
  //article
  getIndexImage:function () {
    return ArticleResource('get', 'getIndexImage')
  },
  getArticleList:function (options) {
    return ArticleResource('get', 'getFrontArticleList', null, {params:options})
  },
  getArticleDetaile:function (id) {
    return ArticleResource('get', id, 'getFrontArticle')
  },
  getTemplateList:function (options) {
    return TemplateResource('get', 'getTemplateList', null, {params:options})
  },
  addNewTemplate:function (data) {
    return TemplateResource('post', '', null, data)
  },
  toggleLike:function (id) {
    return ArticleResource('put',id,'toggleLike')
  },
  getPrenext:function (id,options) {
    return ArticleResource('get',id,'getPrenext', {params:options})
  },
  //comment
  getCommentList:function (id) {
    return CommentResource('get',id,'getFrontCommentList')
  },
  addNewComment:function (data) {
    return CommentResource('post', 'addNewComment', null, data)
  },
  addNewReply: function (id,data) {
    return CommentResource('post', id, 'addNewReply', data)
  },
  delComment:function (id) {
    return CommentResource('delete', id)
  },
  delReply: function (id,data) {
    return CommentResource('delete', id, 'delReply', data)
  }
}
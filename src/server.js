import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext, match, createMemoryHistory } from 'react-router'
import { Provider } from 'react-redux'
import reactCookie from 'react-cookie'
import { fromJS } from 'immutable'
import configureStore from './store/configureStore'
import routes from './routes'

async function fetchAllData(dispatch, components, params) {
  const needs = components
      .filter(x=>x.fetchData)
      .reduce((prev,current)=>{
        return current.fetchData(params).concat(prev)
      },[])
      .map(x=>{
        return dispatch(x)
      })
  return await Promise.all(needs)
}

function renderFullPage(renderedContent, initialState) {
  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="renderer" content="webkit">
      <title>管理系统</title>
      <meta name="description" content="use react redux.">
      <meta name="keyword" content="react redux react-router react-redux-router">
      <link rel="stylesheet" href="http://cdn.amazeui.org/amazeui/2.6.0/css/amazeui.min.css"/>
      <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
      <!--[if lt IE 9]>
        <div class="am-alert am-alert-danger ie-warning" data-am-alert>
          <button type="button" class="am-close">&times;</button>
          <div class="am-container">
            你的浏览器太古董了，
            <a href="http://browsehappy.com/" target="_blank">速速点击换一个</a>
          </div>
        </div>
      <![endif]-->
      <div id="root">${renderedContent}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
      <script src="http://cdn.amazeui.org/amazeui/2.4.2/js/amazeui.min.js"></script>

      <script src="//cdn.bootcss.com/owl-carousel/1.32/owl.carousel.min.js"></script>
      <script src="//cdn.bootcss.com/Counter-Up/1.0.0/jquery.counterup.min.js"></script>
      <script src="//cdn.bootcss.com/waypoints/4.0.0/jquery.waypoints.min.js"></script>
      <script src="http://7xs544.com1.z0.glb.clouddn.com/js/components1.js"></script>
      <script type="text/javascript" charset="utf-8" src="/vendor.js"></script>
      <script type="text/javascript" charset="utf-8" src="/bundle.js"></script>
    </body>
  </html>
  `
}
export default function render(req, res) {
  reactCookie.plugToRequest(req, res)
  const history = createMemoryHistory()
  const token = reactCookie.load('token') || null
  const store = configureStore({auth:fromJS({
    token: token,
    user: null
  })}, history)

  match({ routes:routes(), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      return fetchAllData(store.dispatch, renderProps.components, renderProps.params)
        .then(html=>{
          const InitialView = (
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>)
          const componentHTML = renderToString(InitialView)
          const initialState = store.getState()
          if(__DEVSERVER__){
            res.set('Content-Type', 'text/html')
            return res.status(200).send(renderFullPage(componentHTML, initialState))
          }else{
            return res.render('index', {__html__: componentHTML,__state__: JSON.stringify(initialState)})
          }
        }).catch(err => {
          if(__DEVSERVER__){
            res.set('Content-Type', 'text/html')
            return res.status(200).send(renderFullPage('',{}))
          }else{
            return res.render('index', {__html__: '',__state__: {}})
          }
        })
    } else {
      res.status(404).send('Not Found')
    }
  })
}
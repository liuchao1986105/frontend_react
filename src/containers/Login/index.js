import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { getCookie } from '../../utils/authService'
import { Alert } from 'amazeui-react';
import { API_ROOT } from '../../config'
import * as Actions from '../../actions'
import SNSLogin from '../../components/SNSLogin'
import Header from '../../components/Header'
import './login.scss'

const mapStateToProps = state =>{
  return {
    globalVal : state.globalVal.toJS(),
    auth: state.auth.toJS(),
    sns: state.sns.toJS(),
    showmsg: state.showmsg.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

const formValidate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }

/*  else if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(values.email)) {
    errors.email = '无效电子邮件地址'
  }*/

  if (!values.password) {
    errors.password = 'Required'
  } 
  /*else if (values.password.length < 6 ) {
    errors.password = '密码长度不能低于6位'
  }*/
/*  if (!values.captcha) {
    errors.captcha = 'Required'
  } else if (values.captcha.length !== 6) {
    errors.captcha = '验证码是6位'
  }*/
  return errors
}

@connect(mapStateToProps,mapDispatchToProps)
@reduxForm({
  form: 'signin',
  fields: ['name', 'password'],
  initialValues:{},
  validate: formValidate
})
export default class Login extends Component {
  constructor(props){
    super(props)
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    globalVal: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    sns: PropTypes.object.isRequired,
    values: PropTypes.object,
    fields: PropTypes.object,
    showmsg: PropTypes.object.isRequired
  }

  static fetchData(params){
    return [Actions.getSnsLogins()]
  }

  changeCaptcha(e){
    e.preventDefault()
    const { actions } = this.props
    actions.getCaptchaUrl()
  }

  _validateForm(values) {
    this.props.actions.hideMsg()
    if (values.password.length < 6 ) {
      this.props.actions.showMsg('密码长度不能低于6位')
      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault();
    const { values } = this.props
    if (!this._validateForm(values)) return

    const { actions } = this.props
    actions.localLogin(values)
  }


  componentDidMount() {
    const { actions,sns } = this.props
    if(sns.logins.length < 1){
      actions.getSnsLogins()
    }
  }

  validatorCalss(field){
    let initClass = 'form-control input-lg c-square'
/*    if(field.invalid){
      initClass += ' ng-invalid'
    }
    if(field.dirty){
      initClass += ' ng-dirty'
    }*/
    return initClass
  }

  handleSnsLogin(provider) {
    let search = API_ROOT + 'auth/' + provider + '?redirectUrl=' + window.location.origin
    const token = getCookie('token')
    if (token) {
      search += '&access_token=' + token.replace(/(^\")|(\"$)/g, '')
    }
    window.location.href = search
  }

  render() {
    const { showmsg, auth, actions, sns, globalVal: {captchaUrl}, fields: { name, password}, dirty,invalid } = this.props
    return (
      <div className="c-layout-page signinup">
        <header className="am-topbar am-topbar-inverse am-topbar-fixed-top headercolor" id="header">
          <div className="am-container">
            <h1 className="am-topbar-brand">
              <Link  to="/">MooMoo</Link>
            </h1>

            <button className="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-secondary am-radius am-animation-slide-bottom am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}">
              <span className="am-icon-bars"></span>
            </button>

            <div className="am-collapse am-topbar-collapse am-topbar-right" id="doc-topbar-collapse">
              <ul className="am-nav am-nav-pills am-topbar-nav">
                  <li>
                    <Link  style={{color:'#fff', fontWeight:'600'}}  to="/login">
                      登录
                    </Link>
                  </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="c-content-login-form">
            <div className="modal-dialog">
                <div className="modal-content c-square">
                    <div className="modal-body" >
                        <h3 className="c-font-24 c-font-sbold">登录</h3>
                        <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} noValidate>
                            <div className="form-group"> 
                              <input type="text" className={ this.validatorCalss(name) } placeholder="用户名" {...name} /> 
                            </div>
                            <div className="form-group">
                              <input type="password" className={ this.validatorCalss(password) } placeholder="密码"  {...password} />
                            </div>
                            { (showmsg.content) ? <Alert amStyle="warning"><strong>{showmsg.content}</strong></Alert> : ''}
                            <div className="form-group">
                              <button disabled={ invalid }  type="submit" className="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">登录</button>
                              <Link  className="c-btn-forgot" to="/forgetPassword">忘记密码 ?</Link>
                            </div>
                        </form>
                        <div className="clearfix">
                          <div className="c-content-divider c-divider-sm c-icon-bg c-bg-grey c-margin-b-20">
                              <span>其他方式登录</span>
                          </div>
                          <ul className="c-content-list-adjusted">
                             {/* <li style={{textAlign:'center',fontSize:'12px', color:'#0078B6' }}>
                                  <a  href="javascript:;"><i className="fa fa-weixin">微信登录</i></a>
                              </li>
                              <li style={{textAlign:'center',fontSize:'12px', color:'#0078B6' }}>
                                  <a  href="javascript:;"><i className="fa fa-weibo">微博登录</i></a>
                              </li>
                              <li style={{textAlign:'center',fontSize:'12px', color:'#0078B6' }} >
                                  <a  href="javascript:;" onClick={this.handleSnsLogin.bind(this,"qq")}><i className="fa fa-qq">QQ登录</i></a>
                              </li>*/}
                              {sns.logins.map((item,i)=>
                                <li key={i} style={{textAlign:'center',fontSize:'12px', color:'#0078B6' }} onClick={e=>this.handleSnsLogin(e,item)}>
                                  <a href="javascript:;"><i className={'fa fa-' + item}></i></a>
                                </li> 
                              )}
                          </ul>
                        </div>

                    </div>
                    <div className="modal-footer c-no-border">
                        <span className="c-text-account">还没有账号 ?</span>
                        <Link className="btn c-btn-dark-1 btn c-btn-uppercase c-btn-bold c-btn-slim c-btn-border-2x c-btn-square c-btn-signup" to="/signup">注册</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

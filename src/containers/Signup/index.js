import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Alert } from 'amazeui-react';
import * as Actions from '../../actions'
import Header from '../../components/Header'
import '../Login/login.scss'

const mapStateToProps = state =>{
  return {
    globalVal : state.globalVal.toJS(),
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

  if (!values.password) {
    errors.password = 'Required'
  }

  if (!values.captcha) {
    errors.captcha = 'Required'
  }

  if (!values.email) {
    errors.captcha = 'Required'
  }

  return errors
}

@connect(mapStateToProps,mapDispatchToProps)
@reduxForm({
  form: 'signup',
  fields: ['name', 'password', 'email', 'captcha'],
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
    values: PropTypes.object,
    fields: PropTypes.object,
    showmsg: PropTypes.object.isRequired
  }

 /* static fetchData(params){
    return [Actions.getSnsLogins()]
  }*/

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

    if (values.captcha.length !== 4) {
      this.props.actions.showMsg('验证码是4位')
      return false
    }

    if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(values.email)) {
      this.props.actions.showMsg('无效电子邮件地址')
      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault();
    const { values } = this.props
    if (!this._validateForm(values)) return

    const { actions } = this.props
    actions.signUp(values)
  }


  componentDidMount() {
    this.props.actions.hideMsg()
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


  render() {
    const { showmsg, actions, globalVal: {captchaUrl}, fields: { name, password, email, captcha}, invalid } = this.props
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
                        <h3 className="c-font-24 c-font-sbold">注册</h3>
                        <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} noValidate>
                            <div className="form-group"> 
                              <input type="text" className={ this.validatorCalss(name) } placeholder="用户名" {...name} /> 
                            </div>
                            <div className="form-group"> 
                              <input type="text" className={ this.validatorCalss(email) } placeholder="邮箱" {...email} /> 
                            </div>
                            <div className="form-group">
                              <input type="password" className={ this.validatorCalss(password) } placeholder="密码"  {...password} />
                            </div>
                            <div className="form-group">
                              <input className={ this.validatorCalss(captcha) }  maxLength="4" type="text" placeholder="验证码" {...captcha} />
                            </div>
                            <div className="form-group">
                              <a href="javascript:;" onClick={this.changeCaptcha.bind(this)}>
                                <img src={captchaUrl} />
                              </a>
                            </div>
                            { (showmsg.content) ? <Alert amStyle="warning"><strong>{showmsg.content}</strong></Alert> : ''}
                            <div className="form-group">
                                <button disabled={ invalid }  type="submit" className="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">注册</button>
                                <Link  className="c-btn-forgot" to="/login">返回登录</Link>
                            </div>
                        </form>

                    </div>
                   
                </div>
            </div>
        </div>
      </div>
    )
  }
}

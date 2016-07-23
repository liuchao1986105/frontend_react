import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Badge} from 'amazeui-react'
import { Dropdown } from 'react-bootstrap'
import defaultAvatar from './avatar.png'
import "./header.scss"

export default class Header extends Component{
  constructor(props){
    super(props)
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  }

/*<Link className={'navbar-item logo ' + (location.pathname !== '/apps'&&'active')} title="首页" to="/"></Link>
<a className="navbar-item change-mode" href="javascript:;" onClick={this.handleChangeMode}>
  {(styleMode === 'day-mode')?<i className="fa fa-sun-o"></i>:<i className="fa fa-moon-o"></i>}
</a>*/
        /*                <Link to="/settings" className="navbar-item expanded-avatar" title={auth.user.nickname}>          
                  <img src={ auth.user.avatar || defaultAvatar} /> 
                </Link> */

/*                                    <a className="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                      {auth.user.name}<span className="am-icon-caret-down"></span>
                    </a>
                    <ul className="am-dropdown-content">
                      <li><a href="#"><span className="am-icon-user"></span> 资料</a></li>
                      <li><Link to='/dashboard'><span className="am-icon-cog"></span>后台管理系统</Link></li>
                      <li><a href="javascript:;"  onClick={logout}><span className="am-icon-power-off"></span>退出</a></li>
                    </ul>*/

  render(){
    const {auth,logout,location} = this.props
    return (
      <div>
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
                
                <li >
                  <a href="#"><i className="fa fa-envelope-o fa-fw"></i> <Badge amStyle="success" round>2</Badge></a>
                </li>
                {(auth.token && auth.user)?
                  <li style={{marginTop:'13px'}}>
                   <Dropdown id="dropdown-menu" className="pull-right">
                      <a className="am-dropdown-toggle"  href="javascript:;" bsRole="toggle" >
                        {auth.user.name}<span className="am-icon-caret-down"></span>
                      </a>
                      <Dropdown.Menu className="dropdown-menu">
                        <li style={{paddingLeft:'0px'}}><a href="#"><span className="am-icon-user"></span> 资料</a></li>
                        <li style={{paddingLeft:'0px'}}><Link to='/dashboard'><span className="am-icon-cog"></span>后台管理系统</Link></li>
                        <li style={{paddingLeft:'0px'}}>
                          <a href="javascript:;" onClick={logout}>
                            <i className="fa fa-sign-out"></i> 登出
                          </a>  
                        </li>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  :
                  <li>
                    <Link  style={{color:'#fff', fontWeight:'600'}}  to="/login">
                      登录
                    </Link>
                  </li>
                }
              </ul>
            </div>
          </div>
        </header>
        <div className="bgimg">
          <div className="am-container">
            <h1 className="am-animation-slide-right">成为更好的自己</h1>
            <h2 className="am-animation-scale-up">悠学</h2>
            <button type="button" className="am-btn am-btn-secondary am-radius am-animation-slide-bottom">                    
              <Link  to="/signup">
                <b style={{color: '#ffffff'}}>注册</b>
              </Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
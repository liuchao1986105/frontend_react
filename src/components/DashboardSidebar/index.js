import React, {Component} from 'react';
import { Link } from 'react-router'
export default class DashboardSidebar extends Component {
  render() {
    return (
      <div className="admin-sidebar">
        <ul className="am-list admin-sidebar-list">
          <li><Link to='/dashboard'><span className="am-icon-home"></span> 首页</Link></li>
          <li className="admin-parent">
            <a className="am-cf" data-am-collapse="{target: '#collapse-nav'}"><span className="am-icon-file"></span> 页面模块 <span className="am-icon-angle-right am-fr am-margin-right"></span></a>
            <ul className="am-list am-collapse admin-sidebar-sub am-in" id="collapse-nav">
              <li><a href="#" className="am-cf"><span className="am-icon-check"></span> 个人资料<span className="am-icon-star am-fr am-margin-right admin-icon-yellow"></span></a></li>
              <li><a href="#"><span className="am-icon-th"></span> 相册页面<span className="am-badge am-badge-secondary am-margin-right am-fr">24</span></a></li>
            </ul>
          </li>
          <li><Link to='/dashboard/template'><span className="am-icon-pencil-square-o"></span>课程模板</Link></li>
          <li><a href="#"><span className="am-icon-sign-out"></span> 注销</a></li>
        </ul>

        <div className="am-panel am-panel-default admin-sidebar-panel">
          <div className="am-panel-bd">
            <p><span className="am-icon-bookmark"></span> 公告</p>
            <p>时光静好，与君语；细水流年，与君同。—— MooMoo</p>
          </div>
        </div>

        <div className="am-panel am-panel-default admin-sidebar-panel">
          <div className="am-panel-bd">
            <p><span className="am-icon-tag"></span> wiki</p>
            <p>Welcome to MooMoo!</p>
          </div>
        </div>
      </div>
    );
  }
}
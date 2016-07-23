import React, {Component} from 'react';
import { Link } from 'react-router'
import { Table } from 'amazeui-react';
export default class DashboardIndex extends Component {
  render() {
    return (
      <div className="admin-content">
        <div className="am-cf am-padding">
          <div className="am-fl am-cf"><strong className="am-text-primary am-text-lg">首页</strong> / <small>一些常用模块</small></div>
        </div>

        <ul className="am-avg-sm-1 am-avg-md-4 am-margin am-padding am-text-center admin-content-list ">
          <li><a href="#" className="am-text-success"><span className="am-icon-btn am-icon-file-text"></span><br/>新增页面<br/>2300</a></li>
          <li><a href="#" className="am-text-warning"><span className="am-icon-btn am-icon-briefcase"></span><br/>任务量<br/>308</a></li>
          <li><a href="#" className="am-text-danger"><span className="am-icon-btn am-icon-recycle"></span><br/>昨日访问<br/>80082</a></li>
          <li><a href="#" className="am-text-secondary"><span className="am-icon-btn am-icon-user-md"></span><br/>在线用户<br/>3000</a></li>
        </ul>

        <div className="am-g">
          <div className="am-u-sm-12">
            <Table bordered striped responsive>
              <thead>
              <tr>
                <th>ID</th><th>用户名</th><th>最后成交任务</th><th>成交订单</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Liu Chao</td>
                <td><a href="#">Business management</a></td>
                <td><span className="am-badge am-badge-success">+20</span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Liu Chao</td>
                <td><a href="#">Business management</a></td>
                <td><span className="am-badge am-badge-success">+20</span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Liu Chao</td>
                <td><a href="#">Business management</a></td>
                <td><span className="am-badge am-badge-success">+20</span></td>
              </tr>
              </tbody>
            </Table>

          </div>
        </div>

        <div className="am-g">
          <div className="am-u-md-6">
            <div className="am-panel am-panel-default">
              <div className="am-panel-hd am-cf" data-am-collapse="{target: '#collapse-panel-1'}">文件上传<span className="am-icon-chevron-down am-fr" ></span></div>
              <div className="am-panel-bd am-collapse am-in" id="collapse-panel-1">
                <ul className="am-list admin-content-file">
                  <li>
                    <strong><span className="am-icon-upload"></span> Kong-cetian.Mp3</strong>
                    <p>3.3 of 5MB - 5 mins - 1MB/Sec</p>
                  </li>
                  <li>
                    <strong><span className="am-icon-check"></span> 好人-cetian.Mp3</strong>
                    <p>3.3 of 5MB - 5 mins - 3MB/Sec</p>
                  </li>
                  <li>
                    <strong><span className="am-icon-check"></span> 其实都没有.Mp3</strong>
                    <p>3.3 of 5MB - 5 mins - 3MB/Sec</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="am-u-md-6">
            <div className="am-panel am-panel-default">
              <div className="am-panel-hd am-cf" data-am-collapse="{target: '#collapse-panel-4'}">任务 task<span className="am-icon-chevron-down am-fr" ></span></div>
              <div id="collapse-panel-4" className="am-panel-bd am-collapse am-in">
                <ul className="am-list admin-content-task">
                  <li>
                    <div className="admin-task-meta"> Posted on 25/1/2120 by John Clark</div>
                    <div className="admin-task-bd">
                      The starting place for exploring business management; helping new managers get started and experienced managers get better.
                    </div>
                    <div className="am-cf">
                      <div className="am-btn-toolbar am-fl">
                        <div className="am-btn-group am-btn-group-xs">
                          <button type="button" className="am-btn am-btn-default"><span className="am-icon-check"></span></button>
                          <button type="button" className="am-btn am-btn-default"><span className="am-icon-pencil"></span></button>
                          <button type="button" className="am-btn am-btn-default"><span className="am-icon-times"></span></button>
                        </div>
                      </div>
                      <div className="am-fr">
                        <button type="button" className="am-btn am-btn-default am-btn-xs">删除</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="admin-task-meta"> Posted on 25/1/2120 by 呵呵呵</div>
                    <div className="admin-task-bd">
                      基兰和狗熊出现在不同阵营时。基兰会获得BUFF，“装甲熊憎恨者”。狗熊会获得BUFF，“时光老人憎恨者”。
                    </div>
                    <div className="am-cf">
                      <div className="am-btn-toolbar am-fl">
                        <div className="am-btn-group am-btn-group-xs">
                          <button type="button" className="am-btn am-btn-default"><span className="am-icon-check"></span></button>
                          <button type="button" className="am-btn am-btn-default"><span className="am-icon-pencil"></span></button>
                          <button type="button" className="am-btn am-btn-default"><span className="am-icon-times"></span></button>
                        </div>
                      </div>
                      <div className="am-fr">
                        <button type="button" className="am-btn am-btn-default am-btn-xs">删除</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="am-panel am-panel-default">
              <div className="am-panel-hd am-cf" data-am-collapse="{target: '#collapse-panel-3'}">最近留言<span className="am-icon-chevron-down am-fr" ></span></div>
              <div className="am-panel-bd am-collapse am-in am-cf" id="collapse-panel-3">
                <ul className="am-comments-list admin-content-comment">
                  <li className="am-comment">
                    <a href="#"><img src={require('./team1.jpg')} className="am-comment-avatar" width="48" height="48"/></a>
                    <div className="am-comment-main">
                      <header className="am-comment-hd">
                        <div className="am-comment-meta"><a href="#" className="am-comment-author">某人</a> 评论于 <time>2014-7-12 15:30</time></div>
                      </header>
                      <div className="am-comment-bd"><p>遵循 “移动优先（Mobile First）”、“渐进增强（Progressive enhancement）”的理念，可先从移动设备开始开发网站，逐步在扩展的更大屏幕的设备上，专注于最重要的内容和交互，很好。</p>
                      </div>
                    </div>
                  </li>

                  <li className="am-comment">
                    <a href="#"><img src={require('./team1.jpg')} alt="" className="am-comment-avatar" width="48" height="48"/></a>
                    <div className="am-comment-main">
                      <header className="am-comment-hd">
                        <div className="am-comment-meta"><a href="#" className="am-comment-author">某人</a> 评论于 <time>2014-7-12 15:30</time></div>
                      </header>
                      <div className="am-comment-bd"><p>有效减少为兼容旧浏览器的臃肿代码；基于 CSS3 的交互效果，平滑、高效。AMUI专注于现代浏览器（支持HTML5），不再为过时的浏览器耗费资源，为更有价值的用户提高更好的体验。</p>
                      </div>
                    </div>
                  </li>

                </ul>
                <ul className="am-pagination am-fr admin-content-pagination">
                  <li className="am-disabled"><a href="#">&laquo;</a></li>
                  <li className="am-active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">&raquo;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
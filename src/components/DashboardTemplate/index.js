import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import LoadMore from '../LoadMore'
import moment from 'moment'
import { Table } from 'amazeui-react';

export default class DashboardTemplate extends Component {
  constructor(props) {
    super(props)
    this.noContent = false
  }

  static propTypes = {
    templateList:PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
  }

  componentDidUpdate(prevProps) {
    const {templateList} = prevProps
    if(templateList.items.length > 0){
      this.noContent = true
    }
  }

  handleChange(e, option,isAdd=false){
    e.preventDefault();
    const { actions } = this.props
    //actions.changeOptions(option)
    //actions.getTemplateList(isAdd)
  }

  render() {
    console.log("this.noContent:"+this.noContent);
    const {options, templateList: { items, isFetching, isMore}} = this.props
    return (
      <div className="admin-content">
        <div className="am-cf am-padding">
          <div className="am-fl am-cf"><strong className="am-text-primary am-text-lg">课程模板</strong> / <small>列表</small></div>
        </div>

        <div className="am-g">
          <div className="am-u-md-6 am-cf">
            <div className="am-fl am-cf">
              <div className="am-btn-toolbar am-fl">
                <div className="am-btn-group am-btn-group-xs">
                  <Link to='/dashboard/template/add' className="am-btn am-btn-default" ><span className="am-icon-plus"></span> 新增</Link>
                  {/*<button type="button" className="am-btn am-btn-default"><span className="am-icon-archive"></span> 编辑</button>
                  <button type="button" className="am-btn am-btn-default"><span className="am-icon-trash-o"></span> 删除</button>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="am-u-md-3 am-cf">
            <div className="am-fr">
              <div className="am-input-group am-input-group-sm">
                <input type="text" className="am-form-field"/>
                    <span className="am-input-group-btn">
                      <button className="am-btn am-btn-default" type="button">搜索</button>
                    </span>
              </div>
            </div>
          </div>
        </div>


        <div className="am-g">
          <div className="am-u-sm-12">
              <table className="am-table am-table-striped am-table-hover table-main">
                <thead>
                  <tr>
                    <th className="table-check"><input type="checkbox" /></th><th className="table-id">名称</th><th className="table-title">来源</th><th className="table-type">网址</th><th className="table-author">模式</th><th className="table-date">添加日期</th><th className="table-set">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0&&
                    items.map((item,i)=>
                  <tr key={i}>
                    <td><input type="checkbox" /></td>
                    <td>{item.title}</td>
                    <td>{item.origin}</td>
                    <td><a href={item.url} target='_blank'>{item.url}</a></td>
                    <td>{item.mode}</td>
                    <td>{moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')}</td>
                    <td>
                      <div className="am-btn-toolbar">
                        <div className="am-btn-group am-btn-group-xs">
                          <button className="am-btn am-btn-default am-btn-xs am-text-secondary"><span className="am-icon-pencil-square-o"></span> 编辑</button>
                          <button className="am-btn am-btn-default am-btn-xs am-text-danger"><span className="am-icon-trash-o"></span> 删除</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  )
                }
                </tbody>
              </table>
              <div className="am-cf">
                <div className="am-fr">
                  <ul className="am-pagination">
                    <li className="am-disabled"><a href="#">«</a></li>
                    <li className="am-active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">»</a></li>
                  </ul>
                </div>
              </div>
          </div>
        </div>

         {items.length < 1&& this.noContent && <div>正在大力回车...</div>}
         {/*{(items.length > 0)&&<LoadMore options={options} isMore={isMore} isFetching={isFetching} addData={this.handleChange.bind(this)} />}*/}
      </div>
    );
  }
}
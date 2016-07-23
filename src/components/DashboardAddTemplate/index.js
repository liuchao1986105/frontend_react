import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'

const formValidate = values => {
  const errors = {}
  if (!values.title) {
    errors.name = 'Required'
  }

  return errors
}

const modes = [
  { id: 1, label: '任务', value:'task'},
  { id: 2, label: '其他', value:'other'}
]

const renderOptions = () => modes.map(option => <option key={option.id} value={option.value}>{option.label}</option>)

@reduxForm({
  form: 'template',
  fields: ['title', 'origin', 'url', 'mode', 'description', 'tasklist'],
  initialValues:{}
})
export default class DashboardAddTemplate extends Component {
  constructor(props){
    super(props)
  }

  static propTypes = {
    msg: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    values: PropTypes.object,
    fields: PropTypes.object,
    resetForm: PropTypes.func.isRequired
  }

  _validateForm(values) {
    this.props.actions.hideMsg()
    if (!values.title) {
      this.props.actions.showMsg('名称不能为空')
      return false
    }

    return true
  }

  handleSubmit (e) {
    e.preventDefault();
    const { values } = this.props
    if (!this._validateForm(values)) return

    const { actions } = this.props
    actions.addTemplate(values)
  }

  render() {
    const { msg, actions, fields: { title, origin, url, mode, description, tasklist}, dirty,invalid, resetForm } = this.props
    
    return (
      <div className="admin-content">
        <div className="am-cf am-padding">
          <div className="am-fl am-cf"><strong className="am-text-primary am-text-lg">课程模板</strong> / <small>新增</small></div>
        </div>
        <form className="am-form am-form-horizontal" onSubmit={this.handleSubmit.bind(this)} >
          <div className="am-form-group am-form-group-lg">
            <label htmlFor="title" className="am-u-sm-2 am-form-label">名称</label>
            <div className="am-u-sm-10">
              <input type="text" id="title" className="am-form-field" {...title}/>                       
            </div>
          </div>
          <div className="am-form-group am-form-group-lg">
            <label htmlFor="origin" className="am-u-sm-2 am-form-label">来源</label>
            <div className="am-u-sm-10">
              <input type="text" id="origin" className="am-form-field" placeholder="填入出版社等信息"  {...origin}/>
            </div>
          </div>
          <div className="am-form-group am-form-group-lg">
            <label htmlFor="url" className="am-u-sm-2 am-form-label">网址</label>
            <div className="am-u-sm-10">
              <input type="text" id="url" className="am-form-field" {...url}/>
            </div>
          </div>
          <div className="am-form-group am-form-group-lg">
            <label htmlFor="mode" className="am-u-sm-2 am-form-label">模式</label>
            <div className="am-u-sm-10">
              <select {...mode}>
                <option/>
                {renderOptions()}
              </select>
            </div>
          </div>
          <div className="am-form-group am-form-group-lg">
            <label htmlFor="description" className="am-u-sm-2 am-form-label">描述</label>
            <div className="am-u-sm-10">
              <textarea className="am-form-field" rows="5" id="description" {...description}></textarea>
            </div>
          </div>
          <div className="am-form-group am-form-group-lg">
            <label htmlFor="tasklist" className="am-u-sm-2 am-form-label">任务列表</label>
            <div className="am-u-sm-10">
              <textarea className="am-form-field" rows="5" id="tasklist" {...tasklist} placeholder="第一讲 第一讲名称 第一讲描述(换行输入第二讲)"></textarea>
            </div>
          </div>

          <div className="am-form-group">
            <div className="am-u-sm-10 am-u-sm-offset-2">
              <button style={{marginRight:'15px'}} type="submit" className="am-btn am-btn-default">提交</button>
              <button onClick={resetForm} className="am-btn am-btn-default">重置</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
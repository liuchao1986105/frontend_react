import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'
import DashboardIndex from '../../components/DashboardIndex'
import DashboardTemplate from '../../components/DashboardTemplate'
import DashboardAddTemplate from '../../components/DashboardAddTemplate'

const mapStateToProps = state =>{
  return {
    auth: state.auth.toJS(),
    templateList: state.templateList.toJS(),
    showmsg: state.showmsg.toJS(),
    options: state.options.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    templateList: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    showmsg: PropTypes.object.isRequired
  }

  static fetchData(params){
    return [Actions.getTemplateList()]
  }

  componentDidMount() {
    const { actions,templateList } = this.props
    if(templateList.items.length < 1){
      actions.getTemplateList()
    }
  }

  render() {
    const { showmsg, auth, actions, location, templateList, options } = this.props
    console.log("location.pathname:"+location.pathname)
    let content;
    if (location.pathname) {
      switch(location.pathname){
        case '/dashboard': 
          content = <DashboardIndex/>
          break
        case '/dashboard/template': 
          content = <DashboardTemplate actions={actions} templateList={templateList} options={options}/>
          break
        case '/dashboard/template/add':
          content = <DashboardAddTemplate msg={showmsg} actions={actions}/>
          break
        default:
          content = <DashboardIndex />
      }
    }
    return (
      <div>
        <DashboardHeader/>
        <div className="am-cf admin-main">
          <DashboardSidebar/>
          {content}
        </div>
      </div>

    );
  }
}
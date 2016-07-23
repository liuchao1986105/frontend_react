import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Toaster from '../components/Toaster'
import ScrollTop from '../components/ScrollTop'

const mapStateToProps = state =>{
  return {
    showmsg: state.showmsg.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)

export default class App extends Component {
  constructor(props){
    super(props)
  }

  static fetchData(params){
    return [Actions.getUserInfo()]
  }

  static propTypes = {
    showmsg: PropTypes.object.isRequired,
    children: PropTypes.node,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps){
    const { globalVal } = this.props
/*    if(globalVal.styleMode !== nextProps.globalVal.styleMode){
      document.body.className = nextProps.globalVal.styleMode
    }*/
  }
  
  render() {
    const { actions,children,showmsg,location } = this.props
    return (
      <div>
        {children}
        <Toaster msg={showmsg} hideMsg={actions.hideMsg}  location={location} />
        <ScrollTop />
      </div>
    )
  }
}
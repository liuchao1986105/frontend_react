import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import HomeBody from '../../components/HomeBody'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const mapStateToProps = state =>{
  return {
    globalVal: state.globalVal.toJS(),
    auth: state.auth.toJS(),
    showmsg: state.showmsg.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)

export default class Home extends Component {
  constructor(props){
    super(props);
  }

  static propTypes = {
    globalVal: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps){
    const { globalVal } = this.props
    /*    if(globalVal.styleMode !== nextProps.globalVal.styleMode){
          document.body.className = nextProps.globalVal.styleMode
        }*/
  }

  componentDidMount() {
  }

  render() {
    const { actions,children,auth,location,showmsg } = this.props
    return (
      <div>
        <Header auth={auth} logout={actions.logout} location={location} />
        <HomeBody/>
        <Footer/>
      </div>
    )
  }
}
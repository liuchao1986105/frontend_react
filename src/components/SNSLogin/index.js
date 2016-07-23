import React,{Component,PropTypes} from 'react'
import {getCookie} from '../../utils/authService'
import {API_ROOT} from '../../config'

export default class SNSLogin extends Component{
  constructor(props){
    super(props)
  }

  static propTypes = {
    logins: PropTypes.array.isRequired
  }

  handleSnsLogin(provider) {
    let search = API_ROOT + 'auth/' + provider + '?redirectUrl=' + window.location.origin
    const token = getCookie('token')
    if (token) {
      search += '&access_token=' + token.replace(/(^\")|(\"$)/g, '')
    }
    window.location.href = search
  }

  render(){
    const {logins} = this.props
    return (
      <div>
        <ul>
          {logins.map((item,i)=>
            <li key={i} onClick={e=>this.handleSnsLogin.bind(this,item)}>
              <a href="javascript:;"><i className={'fa fa-' + item}></i></a>
            </li> 
          )}
        </ul>
      </div>
    )
  }
}
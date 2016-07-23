import React, { PropTypes, Component } from 'react'
//import { Link } from 'react-router'

export default class Footer extends Component{
  constructor(props){
    super(props)
  }

  static propTypes = {
  }      

  render(){
    return (
      <div>
        <footer className="c-layout-footer c-layout-footer-3 c-bg-dark">
            <div className="c-postfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 c-col">
                            <p className="c-copyright c-font-grey">2016 &copy; MOOMOO 
                                <span className="c-font-grey-3"> All Rights Reserved.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}
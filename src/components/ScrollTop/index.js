import React,{Component} from 'react'

export default class scrollTop extends Component{
  constructor(props){
    super(props)
    this.state = { isShowTop: false}
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isShowTop !== this.state.isShowTop
  }

  gotop(e){
    e.preventDefault()
    //window.scrollTo(0,0)
    var timer = setInterval(function() {
      window.scrollBy(0, -30);
      if (document.body.scrollTop == 0) {
        clearInterval(timer);
      };
    }, 2);
  }

  handleScroll(){
    if (window.scrollY > 200) {
      this.setState({ isShowTop: true })
    } else {
      this.setState({ isShowTop: false })
    }
  }
  render(){
    return (
      <div>
      {
        this.state.isShowTop&&
        <div className="c-layout-go2top" onClick={this.gotop.bind(this)}>
            <i className="fa fa-arrow-circle-up"></i>
        </div>
      }
      </div>
    )
  }
}
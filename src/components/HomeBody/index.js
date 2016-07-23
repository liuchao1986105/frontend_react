import React, { PropTypes, Component } from 'react'

export default class HomeBody extends Component{
  constructor(props){
    super(props)
  }

  static propTypes = {
  }      

  render(){
    return (
      <div>
         <div className="am-container">
            <div className="c-content-feature-2-grid" data-auto-height="true" data-mode="base-height">
                <div className="c-content-title-1">
                    <h3 className="c-font-uppercase c-center c-font-bold">基础功能</h3>
                    <div className="c-line-center"></div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="c-content-feature-2" data-height="height">
                            <div className="c-icon-wrapper">
                                <div className="c-content-line-icon c-theme c-icon-screen-chart"></div>
                            </div>
                            <h3 className="c-font-uppercase c-font-bold c-title">Web服务</h3>
                            <p style={{fontSize:'14px',color: '#969696', transition: '0.3s'}}>查看您的设备</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="c-content-feature-2" data-height="height">
                            <div className="c-icon-wrapper">
                                <div className="c-content-line-icon c-theme c-icon-support"></div>
                            </div>
                            <h3 className="c-font-uppercase c-font-bold c-title">App服务</h3>
                            <p style={{fontSize:'14px',color: '#969696', transition: '0.3s'}}>随时随地掌握设备的状态</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="c-content-feature-2" data-height="height">
                            <div className="c-icon-wrapper">
                                <div className="c-content-line-icon c-theme c-icon-comment"></div>
                            </div>
                            <h3 className="c-font-uppercase c-font-bold c-title">数据分析统计</h3>
                            <p style={{fontSize:'14px',color: '#969696', transition: '0.3s'}}>设备的信息一目了然</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="c-content-feature-2" data-height="height">
                            <div className="c-icon-wrapper">
                                <div className="c-content-line-icon c-theme c-icon-bulb"></div>
                            </div>
                            <h3 className="c-font-uppercase c-font-bold c-title">数据分析统计</h3>
                            <p style={{fontSize:'14px',color: '#969696', transition: '0.3s'}}>设备的信息一目了然</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="c-content-feature-2" data-height="height">
                            <div className="c-icon-wrapper">
                                <div className="c-content-line-icon c-theme c-icon-sticker"></div>
                            </div>
                            <h3 className="c-font-uppercase c-font-bold c-title">数据分析统计</h3>
                            <p style={{fontSize:'14px',color: '#969696', transition: '0.3s'}}>设备的信息一目了然</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="c-content-feature-2" data-height="height">
                            <div className="c-icon-wrapper">
                                <div className="c-content-line-icon c-theme c-icon-globe"></div>
                            </div>
                            <h3 className="c-font-uppercase c-font-bold c-title">数据分析统计</h3>
                            <p style={{fontSize:'14px',color: '#969696', transition: '0.3s'}}>设备的信息一目了然</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
          <div className="c-content-blog-post-card-1-slider" data-slider="owl" data-items="3" data-auto-play="8000" >
              <div className="c-content-title-1">
                  <h3 className="c-center c-font-uppercase c-font-bold">用户评价</h3>
                  <div className="c-line-center" style={{height:'4px'}}></div>
              </div> 
              <div className="owl-carousel owl-theme c-theme">
                  <div className="item"  style={{marginRight:'20px'}}>
                      <div className="c-content-testimonial-3 c-option-light">
                          <div className="c-content"> Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing. </div>
                          <div className="c-person">
                              <img src={require('./team1.jpg')} className="img-responsive"/>
                              <div className="c-person-detail c-font-uppercase">
                                  <h4 className="c-name">Mark Doe</h4>
                                  <p className="c-position c-font-bold c-theme-font">CFO, Walmart</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="item"  style={{marginRight:'20px'}}>
                      <div className="c-content-testimonial-3 c-option-light">
                          <div className="c-content"> Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing. </div>
                          <div className="c-person">
                              <img src={require('./team1.jpg')} className="img-responsive"/>
                              <div className="c-person-detail c-font-uppercase">
                                  <h4 className="c-name">Ashley Benson</h4>
                                  <p className="c-position c-font-bold c-theme-font">CFO, Loop Inc</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="item"  style={{marginRight:'20px'}}>
                      <div className="c-content-testimonial-3 c-option-light">
                          <div className="c-content"> Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing. </div>
                          <div className="c-person">
                              <img src={require('./team1.jpg')} className="img-responsive"/>
                              <div className="c-person-detail c-font-uppercase">
                                  <h4 className="c-name">Nina Kunis</h4>
                                  <p className="c-position c-font-bold c-theme-font">CFO, ERA Tech</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="item" style={{marginRight:'20px'}}>
                      <div className="c-content-testimonial-3 c-option-light">
                          <div className="c-content"> Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing. </div>
                          <div className="c-person">
                              <img src={require('./team1.jpg')} className="img-responsive"/>
                              <div className="c-person-detail c-font-uppercase">
                                  <h4 className="c-name">Ashley Benson</h4>
                                  <p className="c-position c-font-bold c-theme-font">CFO, Loop Inc</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="item" style={{marginRight:'20px'}}>
                      <div className="c-content-testimonial-3 c-option-light">
                          <div className="c-content"> Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing. </div>
                          <div className="c-person">
                              <img src={require('./team1.jpg')} className="img-responsive"/>
                              <div className="c-person-detail c-font-uppercase">
                                  <h4 className="c-name">Ashley Benson</h4>
                                  <p className="c-position c-font-bold c-theme-font">CFO, Loop Inc</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="item" style={{marginRight:'20px'}}>
                      <div className="c-content-testimonial-3 c-option-light">
                          <div className="c-content"> Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing. </div>
                          <div className="c-person">
                              <img src={require('./team1.jpg')} className="img-responsive"/>
                              <div className="c-person-detail c-font-uppercase">
                                  <h4 className="c-name">Ashley Benson</h4>
                                  <p className="c-position c-font-bold c-theme-font">CFO, Loop Inc</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <div className="c-content-box c-size-md c-bg-white">
          <div className="container">
            <div className="c-content-counter-1 c-opt-1">
                <div className="c-content-title-1">
                    <h3 className="c-center c-font-uppercase c-font-bold">We never stop improving</h3>
                    <div className="c-line-center"></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="c-counter c-theme-border c-font-bold c-theme-font" style={{border: '1px solid #32c5d2'}} data-counter="counterup">201</div>
                        <h4 className="c-title c-first c-font-uppercase c-font-bold">Current Pages</h4>
                        <p className="c-content">..and growing. We will never stop improving and updating JANGO. Expect more.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="c-counter c-theme-border c-font-bold c-theme-font" style={{border: '1px solid #32c5d2'}} data-counter="counterup">3841</div>
                        <h4 className="c-title c-font-uppercase c-font-bold">Satisfied Customers</h4>
                        <p className="c-content">Our Professional and dedicated team are on stand by to server your every concern.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="c-counter c-theme-border c-font-bold c-theme-font" style={{border: '1px solid #32c5d2'}} data-counter="counterup">110,865</div>
                        <h4 className="c-title c-font-uppercase c-font-bold">Total Downloads</h4>
                        <p className="c-content">Join the community of over 110,865 users.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
import React, {Component} from 'react';
export default class NotFound extends Component {
  render() {
    return (
        <div className="admin-content">

          <div className="am-cf am-padding">
            <div className="am-fl am-cf"><strong className="am-text-primary am-text-lg">404</strong> / <small>That’s an error</small></div>
          </div>

          <div className="am-g">
            <div className="am-u-sm-12">
              <h2 className="am-text-center am-text-xxxl am-margin-top-lg">404. Not Found</h2>
              <p className="am-text-center">没有找到你要的页面</p>
              <pre className="page-404">
                .----.
             _.'__    `.
         .--($)($$)---/#\
       .' @          /###\
       :         ,   #####
        `-..__.-' _.-\###/
              `;_:    `"'
            .'"""""`.
           /,  ya ,\\
          //  404!  \\
          `-._______.-'
          ___`. | .'___
         (______|______)
              </pre>
            </div>
          </div>
        </div>
    );
  }
}
import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import odometer from 'odometer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invested: 0,
      repaid: 0,
    };

    window.setTimeout(() => {
      this.refs.invested.innerHTML = 108354147;
      this.refs.repaid.innerHTML = 23634390;
    }, 10);
  }
  render() {
    return (
      <div className="container">
        <Messages messages={this.props.messages}/>
          <h2 className="text-center">Together we make businesses grow and your wallter too</h2>
          <h3 className="text-center">Invest or get funded.</h3>
        <div className="row" style={{marginTop: 40}}>
          <div className="col-sm-6 home-card">
            <div className="panel">
              <div className="panel-body">
                <h3>Business Owner</h3>
                <h4>Fund your project</h4>
                <p className="big-number">
      <span className="odometer" ref="invested">{this.props.invested}</span>€
      </p>
      <h4>Already funded</h4>
                <a href="#" role="button" className="btn btn-default">Ask</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 home-card">
            <div className="panel">
              <div className="panel-body">
                <h3>Investor</h3>
                <h4>Grow your savings</h4>
                <p className="big-number">
      <span className="odometer" ref="repaid">{this.props.repaid}</span>€
      </p>
      <h4>Already funded</h4>
                <a href="#" role="button" className="btn btn-default">Invest</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);

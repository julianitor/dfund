import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Slider from 'rc-slider';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 15000
    };
  }
  onSliderChange(value) {
    this.setState({
      value,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body filters">
                <h3>Filters</h3>

                <h5>Investment size <span className="pull-right">{this.state.value}€</span></h5>
                <Slider value={this.state.value} min={5000} max={50000} step={5000} dots onChange={(val) => this.onSliderChange(val)} />
                5.000€ - 50.0000€

                <h5>Business</h5>
                <p><input type="checkbox"/> Technology</p>
                <p><input type="checkbox"/> Logistics</p>
                <p><input type="checkbox"/> Cryptocurrency</p>

                <h5>Credit score</h5>
                <p><input type="checkbox"/> A+</p>
                <p><input type="checkbox"/> B</p>
                <p><input type="checkbox"/> C</p>

                <h5>Country</h5>
                <select className="form-control">
                  <option>Germany</option>
                  <option>Italy</option>
                  <option>Spain</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="panel">
              <div className="panel-body">
                <h3>FUN SPONGE LTD</h3>
                  <div className="row">
                    <div className="col-sm-3"><img src="img/project-1.jpeg" className="img-responsive"/></div>
                    <div className="col-sm-6">
                      <p>We are looking for 50.000€ in order to buy a warehouse and cut our supply cost by 30%.</p>
                      <p>Credit Score: B</p>
                    </div>
                    <div className="col-sm-3 terms">
                    </div>
                  </div>
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

export default connect(mapStateToProps)(Projects);

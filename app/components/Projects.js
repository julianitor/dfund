import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Slider from 'rc-slider';
import { IndexLink, Link } from 'react-router';

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
                <p><input type="checkbox"/> B-</p>
                <p><input type="checkbox"/> C++</p>

                <h5>Country</h5>
                <select className="form-control">
                  <option>Germany</option>
                  <option>Italy</option>
                  <option>Spain</option>
                </select>

                <p className="map">
                      <img src="/img/map.png" className="img-responsive"/>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-8 loans">

            <div className="panel">
              <div className="panel-body">
                <h3>SUPER HERO DELIVERY GmbH</h3>
                <div className="row">
                  <div className="col-sm-3"><img src="img/project-2.jpeg" className="img-responsive"/>
      <p className="btn-details">
      <Link to="/details/2">
        <button className="btn btn-primary btn-block">Details</button>
      </Link>
      </p>
      </div>
                  <div className="col-sm-6">
                    <p>We are a fast growing delivery business. We are looking for investemnt to make the expansion in Germany.</p>
                    <p><strong>Investment amount:</strong> 100.000€</p>
                    <p><strong>Credit Score:</strong> A</p>
                  </div>
                  <div className="col-sm-3 terms">
      <p className="text-center">Total funded</p>
<div className="flex-wrapper">
  <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart green">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        strokeDasharray="88, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">88%</text>
    </svg>
  </div>
</div>
      <p className="text-center">By 7 investors</p>
                  </div>
                </div>
              </div>
            </div>




            <div className="panel">
              <div className="panel-body">
                <h3>Re-clothes: Recycled clothes store</h3>
                <div className="row">
                  <div className="col-sm-3"><img src="img/project-3.jpeg" className="img-responsive"/>
      <p className="btn-details">
      <Link to="/details/3">
        <button className="btn btn-primary btn-block">Details</button>
      </Link>
      </p>
        </div>
                  <div className="col-sm-6">
                    <p>What we want is to create a new business line to design and launch recycled homewear, so not only we can provide clothes but also eco-friendly homewear and continuing getting more respectful with our environment.</p>
                    <p><strong>Investment amount:</strong> 30.000€</p>
                    <p><strong>Credit Score:</strong> A</p>
                  </div>
                  <div className="col-sm-3 terms">
      <p className="text-center">Total funded</p>
<div className="flex-wrapper">
  <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart blue">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        strokeDasharray="16, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">16%</text>
    </svg>
  </div>
</div>
      <p className="text-center">By 1 investors</p>
                  </div>
                </div>
              </div>
            </div>







            <div className="panel">
              <div className="panel-body">
                <h3>FUN SPONGE LTD</h3>
                <div className="row">
                  <div className="col-sm-3"><img src="img/project-1.jpeg" className="img-responsive"/>
      <p className="btn-details">
      <Link to="/details/1">
        <button className="btn btn-primary btn-block">Details</button>
      </Link>
      </p>
      </div>
                  <div className="col-sm-6">
                    <p>We are looking for 50.000€ in order to buy a warehouse and cut our supply cost by 30%.</p>
                    <p><strong>Investment amount:</strong> 50.000€</p>
                    <p><strong>Credit Score:</strong> B</p>
                  </div>
                  <div className="col-sm-3 terms">

      <p className="text-center">Total funded</p>
<div className="flex-wrapper">
  <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart orange">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        strokeDasharray="30, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">30%</text>
    </svg>
  </div>
</div>
      <p className="text-center">By 4 investors</p>



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

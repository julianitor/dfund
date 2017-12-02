import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Details1 extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">

      <div className="col-sm-3">
      <h4 className="text-center">Dr. Tom Winter</h4>
      <p className="profile-img">
      <img src="/img/tom.png" className="img-responsive"/>
      </p>
      <h5>Ocupation:</h5>
      <p>Entrepreneur</p>
      <h5>Bio:</h5>
      <p>Tom did a course in Business Engineering studies at the Technical University Munich (TUM), and founded a startup right after graduating. He is currently looking for funding opportunities and is busy finding partners for his business. Being a digital native</p>
      <p>Mobile: +49 170 123456</p>
      </div>

      <div className="col-sm-9">
            <div className="panel">
              <div className="panel-body">

      <div className="section">
                <h4>FUN SPONGE LTD</h4>
                <p>We are looking for 50.000€ in order to buy a warehouse and cut our supply cost by 30%.</p>
                <p><strong>Credit Score:</strong> B</p>
      </div>

      <div className="row terms-section">

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Interest rate</span>
      <span className="terms-data">5,5%</span>
      </p>
      </div>

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Return of the loan</span>
      <span className="terms-data">30</span>
      <span className="terms-note">months</span>
      </p>
      </div>

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Date posted</span>
      <span className="terms-data">2</span>
      <span className="terms-note">days ago</span>
      </p>
      </div>

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Total invested</span>
      <span className="terms-data">30%</span>
      <span className="terms-note">By 4 investors</span>
      </p>
      </div>

      </div>


      <div className="section">
      <h4>About the company</h4>

<p>Fun sponge was born in 2012 from the idea of 2 friends willing to bring a bit of joy in the sponge market. </p>

<p>We only use recycled materials and provide a variety very funny sponges that you can use yourself or give as a gift to your friends and family. </p>

<p>After the first year we were already break-even and since then we kept growing by 20% yearly.</p>
      </div>

      <div className="section">
      <h4>Investment</h4>

<p>We are going to buy a new warehouse just 20 mins away from Berlin and it will cut our costs by 30% allowing us to improve our productivity and to give a better and quicker service.</p>
<p>We are already profitable, so it won’t be a problem to give back the loan in 30 month with interests.</p>
<p>Looking forward to give you all the information you need for this investment.</p>
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

export default connect(mapStateToProps)(Details1);

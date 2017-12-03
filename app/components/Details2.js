import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Details2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2000
    };
  }
  onChange(ev) {
    this.setState({
      value: ev.target.value
    });
  }
  invest() {
    $('#investModal').modal('hide');
    $('#successModal').modal('show');
  }
  render() {
    return (
      <div className="container">
      <div className="row">

      <div className="col-sm-3">
      <h4 className="text-center">Dr. Tom Winter</h4>
      <p className="profile-img">
      <img src="/img/tom.png" className="img-responsive"/>
      </p>
      <h4>Entrepreneur</h4>
      <p>Tom did a course in Business Engineering studies at the Technical University Munich (TUM), and founded a startup right after graduating. He is currently looking for funding opportunities and is busy finding partners for his business. Being a digital native</p>
      <p><strong>Mobile:</strong> +49 170 123456</p>
      </div>

      <div className="col-sm-9">
            <div className="panel">
              <div className="panel-body">

      <div className="section">
                <h4>SUPER HERO DELIVERY GmbH</h4>
                <p>We need 100.000€ for financing the expansion in the UK.</p>
                <h5><strong>Credit Score:</strong> A</h5>
      </div>

      <h4>Terms</h4>
      <div className="row terms-section">

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Interest rate</span>
      <span className="terms-data">6,5%</span>
      </p>
      </div>

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Return of the loan</span>
      <span className="terms-data">60</span>
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
      <span className="terms-data">88%</span>
      <span className="terms-note">By 4 investors</span>
      </p>
      </div>

      </div>


      <div className="section">
      <h4>About the company</h4>

      <img src="/img/project-2-details.jpeg" className="pull-left" style={{maxWidth: '20%', marginRight: 20}}/>
<p>Super Hero Delivery is the fastest food delivery in the world! With our amazing staff we will be able to bring the food to your location in less than 60 seconds!</p>

<p>If it takes more than that you don’t have to pay for your food.</p>

<p>We are an established company already, we have been on business since 5 years and we ar constantly growing.</p>
      </div>

      <div className="section">
      <h4>Investment</h4>

<p>After being threaders in Germany for 5 years we are now going to expand our business to the UK, the most interesting country for food delivery. </p>
<p>In order to do that, we will need 100.000€. We will use the money to hire new staff and affiliate 1000 new restaurants in the areas of London, Manchester and Liverpool.</p>
<p>Be an hero and invest on us.</p>
      </div>
      

          <div className="actions">



      <div className="text-right">
<button type="button" className="btn btn-default btn-lg" style={{marginRight: 20}}>
  Negotiate
</button>

<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#investModal">
  Invest
</button>

      </div>



<div className="modal fade" id="investModal" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
        <h4 className="modal-title">Invest</h4>
      </div>
      <div className="modal-body">
      <div className="form-inline">
      <h4>Enter amount: <input value={this.state.value} onChange={(val) => this.onChange(val)} className="form-control" style={{fontSize: 18}}/>€</h4>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" onClick={() => this.invest()}>Invest</button>
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="successModal" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
        <h4 className="modal-title">Success!</h4>
      </div>
      <div className="modal-body">
      <div className="form-inline">


      <div className="check_mark">
  <div className="sa-icon sa-success animate">
    <span className="sa-line sa-tip animateSuccessTip"></span>
    <span className="sa-line sa-long animateSuccessLong"></span>
    <div className="sa-placeholder"></div>
    <div className="sa-fix"></div>
  </div>
</div>

      <p className="congrats">Congratulations, you're an investor!</p>


      </div>
      </div>
    </div>
  </div>
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

export default connect(mapStateToProps)(Details2);


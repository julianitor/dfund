import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Details1 extends React.Component {
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
                <h4>FUN SPONGE LTD</h4>
                <p>We are looking for 50.000€ in order to buy a warehouse and cut our supply cost by 30%.</p>
                <h5><strong>Credit Score:</strong> B</h5>
      </div>

      <h4>Terms</h4>
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
      

          <div className="actions">



      <div className="text-right">
<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#investModal">
  Invest
</button>

      </div>



<div className="modal fade" id="investModal" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Invest</h4>
      </div>
      <div className="modal-body">
      <div className="form-inline">
      <h4>Enter amount: <input value={2000} className="form-control" style={{fontSize: 18}}/>€</h4>
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
        <h4 className="modal-title" id="myModalLabel">Success!</h4>
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

export default connect(mapStateToProps)(Details1);

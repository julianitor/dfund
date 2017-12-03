import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Details3 extends React.Component {
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
      <h4 className="text-center">Dr. Claudia Klar</h4>
      <p className="profile-img">
      <img src="/img/claudia.png" className="img-responsive"/>
      </p>
      <h4>Entrepreneur</h4>
      <p>Just last month Claudia gave birth to her second child, Samuel. She has currently paused her work due to maternity leave, but is taking time to create her dram fashion brand.</p>
      <p><strong>Mobile:</strong> +49 069 1234567</p>
      </div>

      <div className="col-sm-9">
            <div className="panel">
              <div className="panel-body">

      <div className="section">
                <h3>Re-clothes GmbH</h3>
                <p>What we want is to create a new business line to design and launch recycled homewear, so not only we can provide clothes but also eco-friendly homewear and continuing getting more respectful with our environment. </p>
                <h4><strong>Investment amount:</strong> 200.000€</h4>
                <h4><strong>Credit Score:</strong> A</h4>
      </div>

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
      <span className="terms-data">36</span>
      <span className="terms-note">months</span>
      </p>
      </div>

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Date posted</span>
      <span className="terms-data">3</span>
      <span className="terms-note">weeks ago</span>
      </p>
      </div>

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Total invested</span>
      <span className="terms-data">57%</span>
      <span className="terms-note">By 23 investor</span>
      </p>
      </div>

      </div>


      <div className="section">
      <h4>About the company</h4>

<p>Re-clothes is a retail-store that distribute 100% recycled and high quality clothes in Germany. We want to look after of our environment bringing closer the possibility to have a eco-friendly clothes. As well we want to cut downs production-costs reusing recycled materials.</p>

<p>We started our business 2 years ago and since the first day, sales have been increasing constantly. </p>
      </div>

      <div className="section">
      <h4>Investment</h4>

<p>We want to go beyond and open a new homeware line, so our customers not only can wear themselves our recycled clothes but also wear their houses with our 100% recycled homewear.</p>
<p>To lunch this new business line, we need to raise 200.000€. We will put the money for hire new designer and operational stuff to get as soon as possible this new business line at our store.</p>
<p>So help us to be more eco-friendly with our Earth and support us with your investment.</p>
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

export default connect(mapStateToProps)(Details3);



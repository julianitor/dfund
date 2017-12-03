import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Details4 extends React.Component {
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
                <h3>Happy Smoothie Berlin</h3>
                <p>We are looking for acquire new electric-motorcycle to get our fresh and nature smoothie to your location faster and easily. With this we are going to be able to get to AB area of Berlin</p>
                <h4><strong>Investment amount:</strong> 10.000€</h4>
                <h4><strong>Credit Score:</strong> D</h4>
      </div>

      <div className="row terms-section">

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Interest rate</span>
      <span className="terms-data">7,7%</span>
      </p>
      </div>

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Return of the loan</span>
      <span className="terms-data">12</span>
      <span className="terms-note">months</span>
      </p>
      </div>

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Date posted</span>
      <span className="terms-data">8</span>
      <span className="terms-note">days ago</span>
      </p>
      </div>

      <div className="col-sm-3">
      <p>
      <span className="terms-title">Total invested</span>
      <span className="terms-data">16%</span>
      <span className="terms-note">By 1 investors</span>
      </p>
      </div>

      </div>


      <div className="section">
      <h4>About the company</h4>

<p>Happy Smoothie Berlin is a bar where you can find smoothies and milkshakes only made with fresh and high quality products and organic fruits and vegetables as well.</p>

<p>You can find a selected and healthy smoothie menu but the customer can make their own mix, choosing different kind of ingredients and toppings.
Our first bar was opened 3 years ago in Berlin and we opened another location in the same city 1 year ago.</p>
      </div>

      <div className="section">
      <h4>Investment</h4>

<p>We are the most famous Smoothie Bar in Berlin and because of the huge demand and that we want to arrive to the most population as we can, we have decided to launch our delivery service.</p>
<p>For being able to achieve it, we need 10.000€ that goes to buy new electrical motorcycles and to hire new drivers stuff.</p>
<p>Let’s invest in us and you’ll never have to move around our bar to enjoy our delicious smoothies!</p>
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

export default connect(mapStateToProps)(Details4);

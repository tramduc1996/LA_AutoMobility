import React from "react";
import Checkout from "../checkout/Checkout";

const VisaPayment = props => {
  return (
    <div className="panel panel-default credit-card-box">
      <div className="panel-heading display-table">
        <div className="row display-tr text-center">
          <h3 className="panel-title display-td">Payment Details</h3>
          <div className="display-td">
            <img
              className="img-responsive pull-right"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"
              width="50px"
              height="40px"
              alt="visa"
            />
          </div>
        </div>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>CARD NUMBER</label>
            <div className="input-group">
              <input
                type="tel"
                className="form-control"
                name="cardNumber"
                placeholder="Valid Card Number"
                autocomplete="cc-number"
                required
                autofocus
              />
              <span className="input-group-addon">
                <i className="fa fa-credit-card" />
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="form-group">
                <label>
                  <span className="hidden-xs">EXPIRATION</span>
                  <span className="visible-xs-inline">EXP</span> DATE
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="cardExpiry"
                  placeholder="MM / YY"
                  autocomplete="cc-exp"
                  required
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 pull-right">
              <div className="form-group">
                <label>CV CODE</label>
                <input
                  type="tel"
                  className="form-control"
                  name="cardCVC"
                  placeholder="CVC"
                  autocomplete="cc-csc"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>COUPON CODE</label>
            <input type="text" className="form-control" name="couponCode" />
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <button
                className=" btn btn-danger btn-lg "
                style={{ margin: "0 auto" }}
                type="button"
              >
                Cancel
              </button>
            </div>
            <div className="col-lg-6 col-md-6">
              <button
                className="btn btn-success btn-lg "
                style={{ margin: "0 auto" }}
                onClick={props.handleSubmit}
                type="button"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="row" style={{ display: "none" }}>
            <div className="col-xs-12">
              <p className="payment-errors" />
            </div>
          </div>
        </form>
      </div>
      <Checkout />
    </div>
  );
};

export default VisaPayment;

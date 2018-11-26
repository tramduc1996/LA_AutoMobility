import React from "react";

class Checkout extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    window.V.init({
      apikey: "12BTXLGXDJ77XTD4AC7X21u9Qz6ditsbi_iGZY92DjbdWm3i4",
      paymentRequest: {
        currencyCode: "USD",
        subtotal: "11.00"
      }
    });
    window.V.on("payment.success", function(payment) {
      alert(JSON.stringify(payment));
    });
    window.V.on("payment.cancel", function(payment) {
      alert(JSON.stringify(payment));
    });
    window.V.on("payment.error", function(payment, error) {
      alert(JSON.stringify(error));
    });
  }

  render() {
    return (
      <div style={{ margin: "0 auto", padding: "250px 0" }}>
        <img
          alt="Visa Checkout"
          className="v-button"
          role="button"
          style={{ width: "100%", height: "10vh" }}
          src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png"
        />
      </div>
    );
  }
}

export default Checkout;

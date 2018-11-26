import React from "react";
import modal from "reactstrap";

import VisaPayment from "./visaPayment/VisaPayment";

class PaymentModal extends React.Component {
  render() {
    return (
      <div>
        <modal VisaPayment />
      </div>
    );
  }
}
export default PaymentModal;

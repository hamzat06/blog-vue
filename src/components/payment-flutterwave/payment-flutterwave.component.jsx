import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import "./payment-flutterwave.component.style.scss";

const PaymentFlutterwave = () => {
  const config = {
    public_key: "FLWPUBK_TEST-accf0e7336e0ced53c14933a10c6f2de-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "USD",
    payment_options: "card",
    redirect_url: "/",
    meta: {
      counsumer_id: "7898",
      consumer_mac: "kjs9s8ss7dd",
    },
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "DLM",
      description: "Flutterwave paymeny demo",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div class="footer">
      <h2>Join our Team of Writers</h2>
      <h5>On dasdas, writers earn a living doing what they love.</h5>
      <h5>
        Getting started is easy. Just pay a one time $25 fee and everything is
        ready to go.
      </h5>
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              setInterval(() => {
                closePaymentModal();
              }, 1000); // this will close the modal programmatically
            },
            onClose: () => {
              alert("Closed")
            },
          });
        }}
      >
        Join Us
      </button>
    </div>
  );
};

export default PaymentFlutterwave;

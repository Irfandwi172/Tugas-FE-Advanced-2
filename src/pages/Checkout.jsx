import "../style/Checkout.css";
import PaymentCard from "../components/PaymentCard";

import Metode from "../components/Metode";
import CardOffer from "../components/CardOffer";
import courseImg from "../assets/Belajar-Online.jpg";

const Checkout = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-body">
        <div className="checkout-main">
          <PaymentCard title="Metode Pembayaran" ShowPayButton={false} />

          <Metode
            showTextMethod={false}
            showPaymentMethod={false}
            showChangeButton={false}
            showPayButton={true}
          />
        </div>
        <aside className="checkout-aside">
          <CardOffer
            showImage={true}
            courseImg={courseImg}
            showButton={false}
          />
        </aside>
      </div>
    </div>
  );
};

export default Checkout;

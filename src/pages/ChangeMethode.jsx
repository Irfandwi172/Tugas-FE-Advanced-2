import { useState } from "react";
import "../style/ChangeMethode.css";
import PaymentCard from "../components/PaymentCard";

import Metode from "../components/Metode";
import CardOffer from "../components/CardOffer";
import courseImg from "../assets/Belajar-Online.jpg";

const ChangeMethode = () => {

  return (
    <div className="change-page">

      <div className="change-body">
        <div className="change-main">
          <div className="payCard">

          <PaymentCard  title="Metode Pembayaran" ShowPayButton = {true}/>
          </div>
          <div className="Ubahmetode">

        <Metode  showTextMethod={false} showPaymentMethod={false} showChangeButton={false} showPayButton={false}/>
        </div>
          </div>
        <aside className="change-aside">
          <CardOffer showImage={true} courseImg={courseImg} showButton={false} />
        </aside>

      </div>
    </div>
  );
};

export default ChangeMethode;
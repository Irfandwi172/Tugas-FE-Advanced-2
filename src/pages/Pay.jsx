import React from "react";
import "../style/Pay.css";
import Metode from "../components/Metode";
import CardOffer from "../components/CardOffer";
import TataCaraPembayaran from "../components/TataCaraPembayaran";
import courseImg from "../assets/Belajar-Online.jpg";

const Pay = () => {
  return (
    <>  
      <div className="timer">
        <span className="text">Selesaikan pemesanan dalam</span>
        <span className="time">00</span>
        <span>:</span>
        <span className="time">50</span>
        <span>:</span>
        <span className="time">55</span>
      </div>
    <div className="pay-page"> 
      <Metode payTo="/selesai" />
      <CardOffer className="card-offer" showImage={true} courseImg={courseImg} showButton={false}/>
      <TataCaraPembayaran title={"Tata Cara Pembayaran"} showButtonPay={false}/>
    </div>
    </>
    
  );
};

export default Pay;

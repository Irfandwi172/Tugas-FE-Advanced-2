import { useState } from "react";
import bankBca from "../assets/bank_bca.png";
import bankBni from "../assets/bni.png";
import bankBri from "../assets/bri.png";
import bankMandiri from "../assets/mandiri.png";
import dana from "../assets/dana.png";
import ovo from "../assets/ovo.png";
import linkaja from "../assets/linkaja.png";
import shopeepay from "../assets/spay.png";
import mastercard from "../assets/mastercard.png";
import jcb from "../assets/jcb.png";
import visa from "../assets/visa.png";
import "../style/PaymentCard.css";
import { NavLink } from "react-router-dom";

const paymentMethods = [
  {
    id: "bank",
    title: "Transfer Bank",
    options: [
      { id: "bca", label: "Bank BCA", icon: bankBca },
      { id: "bni", label: "Bank BNI", icon: bankBni },
      { id: "bri", label: "Bank BRI", icon: bankBri },
      { id: "mandiri", label: "Bank Mandiri", icon: bankMandiri },
    ],
  },
  {
    id: "ewallet",
    title: "E-Wallet",
    options: [
      { id: "dana", label: "Dana", icon: dana },
      { id: "ovo", label: "OVO", icon: ovo },
      { id: "linkaja", label: "LinkAja", icon: linkaja },
      { id: "shopeepay", label: "ShopeePay", icon: shopeepay },
    ],
  },
  {
    id: "card",
    title: "Kartu Kredit/Debit",
    options: [
      { id: "visa", label: "Visa", icon: visa },
      { id: "mastercard", label: "Mastercard", icon: mastercard },
      { id: "jcb", label: "JCB", icon: jcb },
    ],
  },
];
const PaymentCard = ({ title, ShowPayButton = true }) => {
  const [openSection, setOpenSection] = useState("bank");
  const [selectedMethod, setSelectedMethod] = useState("bca");

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };
  return (
    <div className="payment-card">
      <h2>{title}</h2>

      {paymentMethods.map((section) => (
        <div className="payment-section" key={section.id}>
          <button
            type="button"
            className="payment-section-title"
            onClick={() => toggleSection(section.id)}
          >
            <span>{section.title}</span>
            <span
              className={`payment-arrow ${openSection === section.id ? "open" : ""}`}
            >
              <i className="ti ti-chevron-down"></i>
            </span>
          </button>

          {openSection === section.id && (
            <div className="payment-options">
              {section.options.length === 0 ? (
                <div className="card-icons">
                  <span className="card-icon">Mastercard</span>
                  <span className="card-icon">VISA</span>
                  <span className="card-icon">JCB</span>
                </div>
              ) : (
                section.options.map((option) => (
                  <label
                    key={option.id}
                    className={`payment-option ${selectedMethod === option.id ? "selected" : ""}`}
                  >
                    <div className="payment-option-left">
                      <img
                        src={option.icon}
                        alt={option.label}
                        className="payment-icon"
                      />
                      <span>{option.label}</span>
                    </div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={selectedMethod === option.id}
                      onChange={() => setSelectedMethod(option.id)}
                    />
                  </label>
                ))
              )}
            </div>
          )}
        </div>
      ))}

      {ShowPayButton && (
        <NavLink className="payment-button" to="/pay">
          Bayar
        </NavLink>
      )}
    </div>
  );
};

export default PaymentCard;

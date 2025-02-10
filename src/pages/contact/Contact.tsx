import { memo } from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Biz bilan bog'laning</h1>
        <p>Bizga qulay vaqtda murojaat qilishingiz mumkin:</p>
        <div className="contact-info">
          <div className="info-item">
            <h2>Manzil:</h2>
            <p></p>
            <p>Baku ko`chasi 222, Toshkent, O'zbekiston</p>
          </div>
          <div className="info-item">
            <h2>Telefon:</h2>
            <p>(998 71) 777-88-99</p>
          </div>
          <div className="info-item">
            <h2>Elektron pochta:</h2>
            <p>
              <a href="https://www.figma.com/design/1Re1rcUoiFDXlVwgHEF9no/FINAL-EXAM?node-id=34-213&t=AQdhHz0ce09X1EIX-0">
                FINAL EXAM.UZ
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo (Contact);

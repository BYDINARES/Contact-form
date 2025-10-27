import IconSuccess from "./icons/icon-success-check.svg";

export default function Popup() {
  return (
    <section className="popup">
      <div className="top-section-popup">
        <img src={IconSuccess} alt="success icon" />
        <h1>Message Sent!</h1>
      </div>
      <p>Thanks for completing the form. We'll be in touch soon</p>
    </section>
  );
}

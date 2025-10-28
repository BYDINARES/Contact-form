import { useEffect, useRef } from "react";
import IconSuccess from "./icons/icon-success-check.svg";

export default function Popup({ isOpen, onClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (dialogRef.current) dialogRef.current.close();
    if (onClose) onClose();
  };

  return (
    <dialog ref={dialogRef} className="popup">
      <div className="top-section-popup">
        <img src={IconSuccess} alt="success icon" />
        <h1>Message Sent!</h1>
      </div>
      <p>Thanks for completing the form. We'll be in touch soon.</p>
      <button onClick={handleClose}>Close</button>
    </dialog>
  );
}

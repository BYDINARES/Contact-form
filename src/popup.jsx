import { useEffect, useRef } from "react";
import IconSuccess from "./icons/icon-success-check.svg";

export default function Popup(props) {
  const dialogRef = useRef();

  useEffect(() => {
    if (props.isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [props.isOpen]);

  const handleClose = () => {
    if (dialogRef.current) dialogRef.current.close(); // close the dialog
    if (props.onClose) props.onClose(); // call the function passed from parent
  };

  return (
    <dialog ref={dialogRef} className="popup">
      <div className="top-section-popup">
        <img className="success-icon" src={IconSuccess} alt="success icon" />
        <h1>Message Sent!</h1>
      </div>
      <p className="thanks">
        Thanks for completing the form. We'll be in touch soon.
      </p>
      <button className="close-dialog" onClick={handleClose}>
        Close
      </button>
    </dialog>
  );
}

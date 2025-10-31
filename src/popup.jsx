import { useEffect, useRef } from "react";
import IconSuccess from "./icons/icon-success-check.svg";

export default function Popup(props) {
  const dialogRef = useRef();

  //The dialog itself
  const dialogElement = document.getElementsByClassName("popup");

  useEffect(() => {
    if (props.isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [props.isOpen]);

  //================================== THIS NEEDS TO BE FIXED (THE A.add PART)
  const handleClose = () => {
    dialogElement.classList.add("fade-out");

    setTimeout(() => {
      if (dialogRef.current) dialogRef.current.close();
      if (props.onClose) props.onClose();
      dialogElement.classList.add("popup");
    }, 1000);
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

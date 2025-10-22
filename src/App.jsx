import { useState } from "react";
import "./App.css";

function App() {
  const [numberOfErrors, setnumberOfErrors] = useState(0);

  /*   function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const email
    formEl.reset();
  } */
  return (
    <>
      <header>
        <h1 className="title">Contact Us</h1>
      </header>
      <main>
        <form action="">
          {/* The user's first name */}
          <label className="label-user-infomation name" htmlFor="first-name">
            First Name *
            <input
              className="user-information "
              id="first-name"
              type="text"
              name="first-name"
            />
          </label>

          {/* The user's last name */}
          <label
            className="label-user-infomation last-name"
            htmlFor="last-name"
          >
            Last Name *
            <input
              className="user-information"
              id="last-name"
              type="text"
              name="last-name"
            />
          </label>

          {/* The user's email address */}
          <label className="label-user-infomation email" htmlFor="email">
            Email Address *
            <input
              className="user-information"
              id="email"
              type="email"
              name="email"
            />
          </label>

          <p className="pick-a-query-type">Query Type *</p>
          <label className="query-type-option query-type-option--general general">
            <input type="radio" name="option" value="1" /> General Enquiry
          </label>
          <label className="query-type-option query-type-option--support support">
            <input type="radio" name="option" value="2" /> Support Request
          </label>

          <label className="label-message" htmlFor="message">
            {" "}
            Message *{" "}
            <textarea
              className="large-message"
              name="mesage-box"
              id="message"
            ></textarea>
          </label>

          <label
            className="label-confirmation-button"
            htmlFor="i-accept-button"
          >
            <input
              className="confirmation-button"
              type="checkbox"
              name="users-approval"
              id="i-accept-button"
            />{" "}
            I consent to being contacted by the team *
          </label>

          <input
            id="submit-button"
            type="submit"
            value="Submit"
            placeholder="Submit"
          />
        </form>
      </main>
    </>
  );
}

export default App;

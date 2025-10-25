import { useState } from "react";
import "./App.css";

function App() {
  const [errors, setErrors] = useState({});

  function handleBlur(event) {
    const { name, value, type, checked } = event.target;
    let message = "";

    // Basic validation rules
    if (type === "text" && !value.trim()) {
      message = `${name.replace("-", " ")} is required.`;
    }

    if (type === "email") {
      if (!value.trim()) message = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        message = "Enter a valid email.";
    }

    if (type === "radio" && !checked) {
      // We'll handle radios separately (see below)
    }

    if (type === "checkbox" && !checked) {
      message = "You must consent to be contacted.";
    } else if (value.trim() && errors[name]) {
      // Clear old error if user fixed it
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Update error state
    setErrors((prev) => ({ ...prev, [name]: message }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // check if any radio is selected
    const option = formData.get("option");
    if (!option) {
      setErrors((prev) => ({ ...prev, option: "Please select a query type." }));
      return;
    }

    // ... you could add final checks here if needed
    console.log("Form submitted successfully!");
  }

  console.log({ errors });

  return (
    <>
      <header>
        <h1 className="title">Contact Us</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit} action="">
          {/* The user's first name */}
          <label className="label-user-infomation name" htmlFor="first-name">
            First Name *
            <input
              className="user-information "
              id="first-name"
              type="text"
              name="first-name"
              onBlur={handleBlur}
              required
            />
            <div className="error-containers">
              <p className="error">
                {errors["first-name"]
                  ? `${errors["first-name"]}`
                  : "Error text"}
              </p>
            </div>
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
              onBlur={handleBlur}
              required
            />
            <div className="error-containers">
              <p className="error">
                {errors["last-name"] ? `${errors["last-name"]}` : "Error text"}
              </p>
            </div>
          </label>

          {/* The user's email address */}
          <label className="label-user-infomation email" htmlFor="email">
            Email Address *
            <input
              className="user-information"
              id="email"
              type="email"
              name="email"
              onBlur={handleBlur}
              required
            />
            <div className="error-containers">
              <p className="error">
                {errors["email"] ? `${errors["email"]}` : "Error text"}
              </p>
            </div>
          </label>

          {/* THE TWO RADIO OPTIONS */}
          <div className="two-radio-options-container">
            {/*----Litle title */}
            <p className="pick-a-query-type">Query Type *</p>

            {/*----The first option */}
            <label
              className="query-type-option query-type-option--general general"
              required
            >
              <input
                type="radio"
                name="option"
                value="1"
                onChange={() => setErrors((prev) => ({ ...prev, option: "" }))}
              />{" "}
              General Enquiry
            </label>

            {/*----The second option */}
            <label className="query-type-option query-type-option--support support">
              <input
                type="radio"
                name="option"
                value="2"
                onChange={() => setErrors((prev) => ({ ...prev, option: "" }))}
                required
              />{" "}
              Support Request
            </label>
            <div className="error-containers">
              <p className="error">
                {errors["option"] ? `${errors["option"]}` : "Error text"}
              </p>
            </div>
          </div>

          <label className="label-message" htmlFor="message">
            {" "}
            Message *{" "}
            <textarea
              className="large-message"
              name="message-box"
              id="message"
              onBlur={handleBlur}
              minLength="10"
              maxLength="500"
              required
            ></textarea>
            <div className="error-containers">
              <p className="error">
                {errors["message-box"]
                  ? `${errors["message-box"]}`
                  : "Error text"}
              </p>
            </div>
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
              onBlur={handleBlur}
              required
            />{" "}
            I consent to being contacted by the team *
            <div className="error-containers">
              <p className="error">
                {errors["users-approval"]
                  ? `${errors["users-approval"]}`
                  : "Error text"}
              </p>
            </div>
          </label>

          <input
            id="submit-button"
            type="submit"
            value="Submit"
            placeholder="Submit"
            onBlur={handleBlur}
          />
        </form>
      </main>
    </>
  );
}

export default App;

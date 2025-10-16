import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="title">Contact Us</h1>
      </header>
      <main>
        <form action="">
          {/* The user's first name */}
          <label className="label-user-infomation" htmlFor="first-name">
            First Name *
          </label>
          <input className="user-information" id="first-name" type="text" />
          {/* The user's last name */}
          <label className="label-user-infomation" htmlFor="last-name">
            Last Name *
          </label>
          <input className="user-information" id="last-name" type="text" />
          {/* The user's email address */}
          <label className="label-user-infomation" htmlFor="email">
            Email Address *
          </label>
          <input className="user-information" id="email" type="email" />

          <p className="pick-a-query-type">Query Type *</p>
          <label className="query-type-option query-type-option--general">
            <input type="radio" name="option" value="1" /> General Enquiry
          </label>
          <label className="query-type-option query-type-option--support">
            <input type="radio" name="option" value="2" /> Support Request
          </label>

          <label className="label-message" htmlFor="message">
            {" "}
            Message *{" "}
          </label>
          <textarea
            className="large-message"
            name="mesage-box"
            id="message"
          ></textarea>

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

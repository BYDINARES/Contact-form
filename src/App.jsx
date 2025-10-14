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
          <label htmlFor="first-name">First Name *</label>
          <input className="user-information" id="first-name" type="text" />

          {/* The user's last name */}
          <label htmlFor="last-name">Last Name *</label>
          <input className="user-information" id="last-name" type="text" />

          {/* The user's email address */}
          <label htmlFor="email">Email Address *</label>
          <input className="user-information" id="email" type="email" />

          <p>Query Type *</p>
          <label>
            <input type="radio" name="option" value="1" /> General Enquiry
          </label>
          <label>
            <input type="radio" name="option" value="2" /> Support Request
          </label>

          <label htmlFor="message"> Message * </label>
          <textarea name="mesage-box" id="message"></textarea>

          <label htmlFor="i-accept-button">
            <input type="checkbox" name="users-approval" id="i-accept-button" />{" "}
            I consent to being contacted by the team *
          </label>

          <label htmlFor=""></label>
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

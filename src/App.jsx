import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Contact Us</h1>
      </header>
      <main>
        <form action="">
          {/* The user's first name */}
          <label htmlFor="first-name">First Name *</label>
          <input id="first-name" type="text" />

          {/* The user's last name */}
          <label htmlFor="">Last Name *</label>
          <input type="text" />

          {/* The user's email address */}
          <label htmlFor="">Email Address *</label>
          <input type="email" />
        </form>
      </main>
    </>
  );
}

export default App;

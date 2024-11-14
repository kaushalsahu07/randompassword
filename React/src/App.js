import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  // const passwordref = useRef(null)
  const [password, setPassword] = useState("");
  const [symbolCount1, symbolCount] = useState(0);

  const passwordgen = () => {
    let number = "1234567890";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var symbol = `/"!@#$%^&*()_+=:,.<>/?"`;

    let allchar = number + upperCase + lowerCase + symbol;

    let generatepassword = "";
    for (let i = 0; i < 12; i++) {
      generatepassword += allchar.charAt(
        Math.floor(Math.random() * allchar.length)
      );
    }

    setPassword(generatepassword);

    const symbolLength = password.replace(/[/"!@#$%^&*()_+=:,.<>/?"]/g, "");
    symbolCount(symbolLength.length);
  };

  const copybutton = () => {
    navigator.clipboard.writeText(password);
    alert("Copied the text: " + password);
  };

  const numericLength = password.replace(/[^0-9]/g, "").length;
  const upperchaseLength = password.replace(/[^A-Z]/g, "").length;
  const lowerchaseLength = password.replace(/[^a-z]/g, "").length;

  return (
    <div className="box">
      <h1>
        Generate a <br /> <span>Random Password</span>
      </h1>
      <div className="password-box">
        <input
          type="text"
          name="passwordbox"
          id="password"
          value={password}
          readOnly
          placeholder="Passwords"
        />
        <button className="icon" onClick={copybutton}>
          <i className="fa-regular fa-copy"></i>
        </button>
      </div>
      <button className="button" onClick={passwordgen}>
        Generate
      </button>
      <ul className="letter-list">
        <li>Number: {numericLength}</li>
        <li>Upperchase: {upperchaseLength}</li>
        <li>Lowerchase: {lowerchaseLength}</li>
        <li>symbolLength: {symbolCount1}</li>
      </ul>
    </div>
  );
}

export default App;

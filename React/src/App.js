import "./App.css";
import React, { useState} from "react";


function App() {
  const [password, setPassword] = useState("");


  const passwordgen = () => {
    
    let number = "1234567890";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let symbol = "!@#$%^&*()_+=:,.<>/?";
 
    let allchar = number + upperCase + lowerCase + symbol;
    
    let generatepassword = "";
    for (let i = 0; i < 12; i++) {
      generatepassword +=  allchar.charAt(Math.floor(Math.random() * allchar.length));
    }
    
    setPassword(generatepassword);

  };
  

  const copybutton = () => {

    navigator.clipboard.writeText(password);
    alert("Copied the text: " + password);
  }

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
    </div>
  );
}

export default App;

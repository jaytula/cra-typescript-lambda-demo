import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("default");
  const onClick = () => {
    fetch("/.netlify/functions/hello")
      .then(res => res.text())
      .then(data => {
        setMessage(data);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Message: <pre>{message}</pre>
        </p>
        <button onClick={onClick}>Click Me!</button>
      </header>
    </div>
  );
}

export default App;

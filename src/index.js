import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import MemeGenerator from "./MemeGenerator";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

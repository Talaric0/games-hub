import React from "react";
//components and pages
import Home from "./pages/Home";
//style
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;

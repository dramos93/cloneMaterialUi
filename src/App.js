import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes.js";
import Main from "./components/main";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes />
      </Main>
    </BrowserRouter>
  );
}

export default App;

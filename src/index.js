import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
const Home = () => {
  return (
    <div>
        <h1>Welcome to Cody's Website</h1>
        <h2>Not much is on this page, go play tic tac toe or something</h2>
    </div>
);
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default Home;
import React from "react";
import Navbar from "./NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./"
import Game from "./pages/ticTacToe"
import Rando from "./pages/randomAPI"

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route path="/ticTacToe" element={<Game/>} />
              <Route path="/randomAPI" element={<Rando/>} />

          </Routes>
      </Router>
  );
}
export default App;

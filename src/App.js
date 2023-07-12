import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import HomePage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <HomePage />
    </Router>
  );
}

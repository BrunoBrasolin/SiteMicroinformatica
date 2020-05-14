import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./pages/Header";
import Links from "./pages/Links";
import ModalEx from "./pages/ModalEx";

ReactDOM.render(
  <>
    <Header />
    <Links />
    <ModalEx />
  </>,
  document.getElementById("root")
);

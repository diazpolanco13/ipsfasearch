import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./components/NavBar";
import IpsfaSearch from "./IpsfaSearch";

ReactDOM.render(
  <div className="h-screen px-4 mx-auto bg-gray-200 max-w-screen-full sm:px-6 lg:px-8">
    <NavBar />
    <div className="max-w-3xl mx-auto mt-8">
      <IpsfaSearch />
    </div>
  </div>,
  document.getElementById("root")
);

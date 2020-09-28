import React from "react";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";
import "./styles/main.scss";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <SearchInput />
    </div>
  );
};

export default App;

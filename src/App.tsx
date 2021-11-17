import React from "react";
import Products from "../src/Components/Products";
import Header from "./Components/Header";
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
};

export default App;

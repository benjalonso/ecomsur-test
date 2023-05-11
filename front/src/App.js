import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Products from "./components/Products";
const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/api/products")
        .then((res) => res.json())
        .then((res) => setResponse(res));
    };  
    getApiResponse();
  }, []);

  return (
    <div
      style={{ textAlign: "center", background: "#f9fbf2", height: "auto", paddingBottom: '30px', paddingTop: '65px' }}
    >
      <Navbar />
      <Products productsData={response} />
 
    </div>
  );
};

export default App;

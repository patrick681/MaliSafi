import { useState } from "react";
import "./App.css";
import ProductSection from "./components/ProductSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="footer"></div>
      <ProductSection />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

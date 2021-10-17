import React from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;

import React from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Container from "./components/Container";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <Container />
      <Footer />
    </main>
  );
}

export default App;

import React, {useEffect} from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from "./components/Footer";

import Container from "./components/Container";

function App() {
  useEffect(() => {
    document.title = 'React portfolio';
  }, []);
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

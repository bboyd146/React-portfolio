import React, {useEffect} from "react";
import Container from "./components/Container";

function App() {
  useEffect(() => {
    document.title = 'My portfolio';
  }, []);
  return (
    <main className="text-gray-400 scroll-smooth body-font">
      <Container />
    </main>
  );
}

export default App;

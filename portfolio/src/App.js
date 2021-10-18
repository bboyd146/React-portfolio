import React, {useEffect} from "react";
import Container from "./components/Container";

function App() {
  useEffect(() => {
    document.title = 'React portfolio';
  }, []);
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Container />
    </main>
  );
}

export default App;

import "./App.css";
import FlashCard from "./components/FlashCard";
import { alphabet } from "./data/Alphabet";

function App() {
  return (
    <>
      {alphabet.map((item, index) => {
        return <FlashCard key={index} content={item} />;
      })}
    </>
  );
}

export default App;

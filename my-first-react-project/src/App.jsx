import { useState } from "react";
import Counter from "./componenets/Counter";
const App = () => {
  const [items, setItems] = useState(["Jeans", "Jackets"]);
  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const addItemClickHandler = () => {
    setItems([...items, userInput]);
    setUserInput("");
  };

  return (
    <>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="Enter item name"
      />
      <button onClick={addItemClickHandler}>Add Item </button>
      {items.map((item, index, arr) => {
        return <Counter itemName={item} />;
      })}
    </>
  );
};

export default App;

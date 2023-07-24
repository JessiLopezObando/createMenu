import './App.css';
import InputCategory from "./components/InputCategory";
import React, {useState} from "react";
import ShowCategories from "./components/ShowCategories";
import ShowProducts from "./components/ShowProducts";

function App() {

    const [categories, setCategories] = useState([])

  return (
    <div className="App">
        <h1>Menú</h1>
        <InputCategory
            categories ={categories}
            setCategories={setCategories}
        />
        <ShowCategories
            categories ={categories}
            setCategories={setCategories}
        />
    </div>
  );
}

export default App;

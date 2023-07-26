import './App.css';
import CategoryForm from "./components/CategoryForm";
import React, {useState} from "react";
import CategoriesList from "./components/CategoriesList";

function App() {


    const [categories, setCategories] = useState([])

  return (
    <div className="App">
        <h1>Menú</h1>
        <CategoryForm
            categories ={categories}
            setCategories={setCategories}
        />
        <CategoriesList
            categories ={categories}
            setCategories={setCategories}
        />
    </div>
  );
}

export default App;

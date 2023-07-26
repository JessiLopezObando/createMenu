import React, {useState} from "react";

const CategoryForm = ({categories, setCategories}) =>{

    const [inputCategory, setInputCategory]= useState('')
    const [countCategory, setCountCategory] = useState(1)


    const handleChange = (e) => {
        setInputCategory(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(inputCategory.trim() !== ''){
            const newCategory = {
                id: countCategory,
                label:inputCategory
            }

            setCountCategory(countCategory + 1)
            setCategories([...categories, newCategory])
            setInputCategory('')
        }
    }

    console.log(categories);

    return(
      <div>
          <form onSubmit={handleSubmit}>
              <input className="category" type="text" onChange={handleChange} value={inputCategory}/>
              <input className="addCategory" type="submit" value="Añadir Categoria" />
          </form>
      </div>

    )
}

export default CategoryForm
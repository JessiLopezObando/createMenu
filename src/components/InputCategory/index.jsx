import React, {useState} from "react";

const InputCategory = ({categories, setCategories}) =>{

    const [inputCategory, setInputCategory]= useState('')


    const handleChange = (e) => {
        setInputCategory(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(inputCategory !== ''){
            const newCategory = {
                label:inputCategory
            }

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

export default InputCategory
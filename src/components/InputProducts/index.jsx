import React, {useState} from "react";
import ShowProducts from "../ShowProducts";

const InputProducts = () =>{

    const [inputProduct, setInputProduct] = useState('')
    const [products, setProducts] = useState([])

    const HandleChange = (e) =>{
        setInputProduct(e.target.value)
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()

        if(inputProduct !== ''){
            const newProduct = {
                label: inputProduct
            }

            setProducts([...products, newProduct])
            setInputProduct('')
        }

    }

    console.log(products);


    return(

        <form onSubmit={HandleSubmit}>
            <input className="product" type="text" onChange={HandleChange} value={inputProduct} />
            <input className="addProduct" type="submit" value="Añadir" />
        </form>
    )
}

export default InputProducts
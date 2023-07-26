import React, {useState} from "react";

const ProductForm = ({productsByCategory, setProductsByCategory, categoryId}) =>{

    const [inputProduct, setInputProduct] = useState('')
    const [inputPriceProduct, setInputPriceProduct] = useState('')

    const HandleChangeProduct = (e) =>{
        setInputProduct(e.target.value)
    }

    const HandleChangePrice = (e) =>{
        setInputPriceProduct(e.target.value)
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()

        if(inputProduct.trim() !== ''){
            const newProduct = {
                label: inputProduct,
                price: inputPriceProduct,
                categoryId: categoryId
            }

            setProductsByCategory((prevProductsByCategory) =>{
                const prevProducts = prevProductsByCategory[categoryId] || []
                return {...prevProductsByCategory, [categoryId]: [...prevProducts, newProduct]}
            })

            setInputProduct('')
            setInputPriceProduct('')
        }

    }

    return(
    <>
        <form onSubmit={HandleSubmit}>
            <input className="product" type="text" onChange={HandleChangeProduct} value={inputProduct} placeholder="Ingrese el producto" required/>
            <input className= "priceProduct" type="number" onChange={HandleChangePrice} value={inputPriceProduct} placeholder="Ingrese el precio" required/>
            <div>
                <input className="addProduct" type="submit" value="Añadir" />
            </div>

        </form>
    </>

    )
}

export default ProductForm
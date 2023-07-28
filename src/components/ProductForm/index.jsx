import React, {useState} from "react";

const ProductForm = ({productsByCategory, setProductsByCategory, categoryId, product}) =>{

    const [inputProduct, setInputProduct] = useState(product?.label || '')
    const [inputPriceProduct, setInputPriceProduct] = useState(product?.price || '')
    const [productId, setProductId] = useState(product?.id || 1)

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
                    id: productId,
                    label: inputProduct,
                    price: inputPriceProduct,
                }

                setProductsByCategory((prevProductsByCategory) =>{
                    const prevProducts = prevProductsByCategory[categoryId] || []
                    return {...prevProductsByCategory, [categoryId]: [...prevProducts, newProduct]}
                })

                setProductId(productId +1)
                setInputProduct('')
                setInputPriceProduct('')

            }

    }

    console.log(productsByCategory);

    return(
    <>
        <form onSubmit={HandleSubmit}>
            <input className="product" type="text" onChange={HandleChangeProduct} value={inputProduct} placeholder="Ingrese el producto" required/>
            <input className= "priceProduct" type="number" onChange={HandleChangePrice} value={inputPriceProduct} placeholder="Ingrese el precio" required min="0" />
            {!product && (
                <div>
                    <input className="addProduct" type="submit" value="Añadir" />
                </div>
            )}
            {product &&(
                <div>
                    <input className="addProduct" type="submit" value="Actualizar" />
                </div>
            )}

        </form>
    </>

    )
}

export default ProductForm
import React, {useState} from "react";
import ProductForm from "components/ProductForm";

const ProductCard = ({product}) => {

    const [editState, setEditState] = useState(false)
    const [buttonText, setButtonText] = useState("Editar")

    const clickButtonEdit = () =>{
        setEditState(!editState)
        setButtonText(editState? "Editar" : "Actualizar")
    }

    console.log(editState);

    return (
        <li className="product-card">
            {product.label} ${product.price}
            <button className="button-edit" onClick={clickButtonEdit}>{buttonText}</button>
            <button className="button-delete">Eliminar</button>
            <div className="form-product-edit" >
                {editState && (
                    <ProductForm product={product}/>
                )}
            </div>
        </li>
    )
}

export default ProductCard
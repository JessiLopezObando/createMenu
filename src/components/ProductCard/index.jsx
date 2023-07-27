import React, {useState} from "react";
import ProductForm from "components/ProductForm";

const ProductCard = ({product}) => {

    const [editState, setEditState] = useState(false)

    const clickButtonEdit = () =>{
        setEditState(!editState)
    }

    console.log(editState);

    return (
        <li className="product-card">
            {product.label} ${product.price}
            <button className="button-edit" onClick={clickButtonEdit}>Editar</button>
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
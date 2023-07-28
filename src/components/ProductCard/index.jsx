import React, {useState} from "react";
import ProductForm from "components/ProductForm";

const ProductCard = ({product, setProductsByCategory, categoryId}) => {

    const [editState, setEditState] = useState(false)



    const clickButtonEdit = () =>{
        setEditState(!editState)
    }

    const handleProductDelete = (productId) => {
        setProductsByCategory((previousProducts) => {
            return {
                ...previousProducts,
                [categoryId]: previousProducts[categoryId].filter((product) => productId !== product.id)
            }
        })
    }



    return (
        <ul>
            <li className="product-card">
                {product.label} ${product.price}
                <button className="button-edit" onClick={clickButtonEdit}>
                    Editar
                </button>
                <button className="button-delete" onClick={() => handleProductDelete(product.id)}>
                    Eliminar
                </button>
                <div className="form-product-edit" >
                    {editState && (
                        <ProductForm product={product}/>
                    )}
                </div>
            </li>

        </ul>


    )
}

export default ProductCard
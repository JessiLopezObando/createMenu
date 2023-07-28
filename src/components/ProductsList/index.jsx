import React, {useState} from "react"
import ProductCard from "components/ProductCard"
import ProductForm from "components/ProductForm"

const ProductsList = ({ categoryId }) => {
    const [productsByCategory, setProductsByCategory] = useState([])

    const productsInCategory = productsByCategory[categoryId] || []

    console.log(productsInCategory)

    return (
       <div>
           <ProductForm
               productsByCategory={productsByCategory}
               setProductsByCategory={setProductsByCategory}
               categoryId={categoryId}
           />
           {productsInCategory.length > 0 ? (
               productsInCategory.map((product) => (
                   <ProductCard
                       key={product.id}
                       product={product}
                       setProductsByCategory={setProductsByCategory}
                       categoryId={categoryId}
                   />
               ))
           ) : (
               <p>No hay productos para esta categoría</p>
           )}
       </div>


    )
}

export default ProductsList
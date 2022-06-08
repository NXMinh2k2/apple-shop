import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../../Data'
import { addProduct } from '../../redux/slice'
import { deleteProduct } from '../../redux/slice'
import { useDispatch } from 'react-redux'

const ProductDetail = () => {

    const productId = useParams()
    const productDetail = DATA.filter(x => x.id == productId.id)
    const product = productDetail[0]

    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const dispatch = useDispatch()

    const handleCart = (product) => {
       if(cartBtn === "Add to Cart") {
           dispatch(addProduct(product))
           setCartBtn("Remove from cart")
       } else {
           dispatch(deleteProduct(product))
           setCartBtn("Add to cart")
       }
    }

  return (
    <div>
       <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt="" height="900px"/>
                </div>
                <div className="col-md-6 d-flex justify-content-center flex-column">
                    <h1 className='display-5 fw-bold'>{product.title}</h1>
                    <hr />
                    <h2 className='my-4'>$ {product.price}</h2>
                    <p className='lead'>{product.desc}</p>
                    <button className='btn btn-outline-primary my-5' onClick={() => handleCart(product)}>
                       {cartBtn}
                    </button>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default ProductDetail
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../redux/slice'
import { NavLink } from 'react-router-dom'

const CartPage = () => {

    const products = useSelector(state => state.handle)
    const dispatch = useDispatch()

    const handleClose = (product) => {
        dispatch(deleteProduct(product))
    }

  return (
    <div>
        {products.length == 0 && 
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className="container py-4">
                    <div className='row'>
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        }
        {products.length != 0 && products.map(product => (
            <div key={product.id} className='px-4 my-5 bg-light rounded-3'>
                <div className="container py-4">
                    <button 
                        className='btn-close float-end' 
                        aria-label='Close'
                        onClick={() => handleClose(product)}
                    >
                    </button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.img} alt="" height="200px" width="180px"/>
                        </div>
                        <div className='col-md-4'>
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">$ {product.price}</p>
                            <p>{product.desc}</p>
                        </div>
                    </div>    
                </div>
            </div>
        ))}
        {products.length !=0 && 
            <div>
                <div className="container">
                    <div className="row">
                        <NavLink 
                            to="checkout" 
                            className="btn btn-outline-primary mb-5 w-25"
                        >
                            Proceed To checkout
                        </NavLink>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default CartPage
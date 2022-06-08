import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector  } from 'react-redux'

const Cart = () => {

  const products = useSelector(state => state.handle)

  return (
    <div>
       <Link to="/cart" className='btn btn-outline-primary ms-2'>
          <span className='fa fa-shoppong-cart me-1'></span>
          {`Cart (${products.length})`}
       </Link>
    </div>
  )
}

export default Cart
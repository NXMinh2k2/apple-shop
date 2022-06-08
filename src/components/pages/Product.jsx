import React from 'react'
import { Link } from 'react-router-dom'
import DATA from '../../Data'

const Product = () => {

  const cardItem = (item) => {
    return (
      <div key={item.id} class="card my-5 py-4" style={{width: "18rem"}}>
        <img src={item.img} class="card-img-top" alt={item.title} />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead">$ {item.price}</p>
          <Link to={`/products/${item.id}`} class="btn btn-outline-primary">BUY NOW</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {DATA.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product
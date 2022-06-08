import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione tempore at inventore, culpa corporis labore a. Assumenda, neque expedita! Nihil quidem tempora quisquam inventore maiores itaque nulla alias, placeat nemo!
            </p>
            <Link to="/contact" class="px-3 btn btn-outline-primary">Contact us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.png" alt="" height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
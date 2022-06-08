import React from 'react'

const Signup = () => {
  return (
    <div>
        <button type="button" class="btn btn-outline-primary mx-4" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <span class="fa fa-user-plus me-1"></span>
            Signup
        </button>

        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <button class="btn btn-primary w-100 mb-4">
                   <span class="fa fa-google me-2"></span> 
                    Sign up with Google
                </button>
                <button class="btn btn-primary w-100 mb-4">
                   <span class="fa fa-facebook me-2"></span> 
                    Sign in with Facebook
                </button>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputText1" class="form-label">Username</label>
                        <input type="text" class="form-control" id="exampleInputText1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-outline-primary w-100 mt-4">Submit</button>
                </form>
            </div>
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default Signup
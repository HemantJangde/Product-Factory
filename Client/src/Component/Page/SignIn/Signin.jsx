import React from 'react'

function Signin() {
  return (
    
    <main className="form-signin  container d-flex justify-content-center">
        <div className="card text-center" style={{width:"45% "}}>
      <form>
        <h1 className="h3 mb-3 fw-normal p-4 fw-bold">Sign in</h1>
    
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-dark text-light" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2025</p>
      </form></div>
    </main>
    
    
        
      
  )
}

export default Signin
import React, { useState } from "react";

function Signin({ setIsloggedIn, setRole }) {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [localRole, setLocalRole] = useState("User");

  function LoginHandler(e) {
    e.preventDefault();

    if (
      email.trim().toLowerCase() === "hemant@gmail.com" &&
      password.trim().toLowerCase() === "hemant123"
    ) {
      setIsloggedIn(true);
      setRole(localRole);
    } else {
      alert("Enter valid detail");
    }
  }

  return (
    <main className="form-signin container d-flex justify-content-center">
      <div className="card text-center" style={{ width: "45%" }}>
        <form>
          <h1 className="h3 mb-3 fw-normal p-4 fw-bold">Log in</h1>

          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => SetPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            type="button"
            className="btn btn-outline-primary mb-3"
            onClick={() =>
              setLocalRole((prev) => (prev === "User" ? "Admin" : "User"))
            }
          >
            Current Role: {localRole} (Click to switch)
          </button>

          <button
            type="submit"
            className="w-100 btn btn-lg btn-dark text-light"
            onClick={LoginHandler}
          >
            Sign in as {localRole}
          </button>

          <p className="mt-5 mb-3 text-muted">© 2025</p>
        </form>
      </div>
    </main>
  );
}

export default Signin;

import React from "react";

export default function Login() {
  return (
    <div
      className="mx-auto d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <form
        action="/login"
        method="post"
        style={{
          width: "400px",
          border: "1px solid rgb(219, 219, 219)",
          padding: "20px 30px",
          borderRadius: "3px",
        }}
      >
        <h2 className="mb-3 text-center">Login</h2>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="submit" className="btn btn-primary mt-3 w-100">
          Login
        </button>
      </form>
    </div>
  );
}

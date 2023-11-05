import React, { useEffect, useState } from "react";
import { base_url } from "../App";

export default function Registration() {
  const [name, setName] = useState(undefined);
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  useEffect(() => {
    fetch(`${base_url}/register`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "qwe",
        email: "isllom@gmail.com",
        password: "qwe",
        role: "user",
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
        return;
      });
  }, []);

  const handleRegister = () => {
    try {
      if (name && email && role && password) {
        console.log({ name, email, role, password });
        fetch(`${base_url}/register`, {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            role,
          }),
        })
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((err) => {
            console.log(err);
            return;
          });
      }
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    fetch(`${base_url}/users`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
        return;
      });
  }, []);

  return (
    <div
      className="mx-auto d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div
        style={{
          width: "400px",
          border: "1px solid rgb(219, 219, 219)",
          padding: "20px 30px",
          borderRadius: "3px",
        }}
      >
        <h2 className="mb-3 text-center">Registration</h2>
        <div className="d-flex flex-column">
          <div className="form-floating mb-3">
            <input
              style={{ borderRadius: "3px" }}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="John"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-select"
              style={{ padding: "8px 10px", height: "70px", cursor: "pointer" }}
              multiple
              aria-label="Multiple select example"
              name="role"
              onChange={(e) => setRole(e.target.value)}
            >
              <option selected defaultValue={role} value="user">
                User
              </option>
              <option defaultValue={role} className="mt-2" value="admin">
                Admin
              </option>
            </select>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderRadius: "3px" }}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: "3px" }}
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          onClick={() => {
            handleRegister();
          }}
          className="btn btn-primary w-100"
        >
          Register
        </button>
      </div>
    </div>
  );
}

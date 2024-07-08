import React from "react";
export default function page() {
  return (
    <>
      <h3 className="mb-3 mt-5 ms-4">Welcome back.</h3>
      <div>
        <div className="col-md-6 ms-4">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput" style={{ color: "black" }}>
              Email address
            </label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword" style={{ color: "black" }}>
              Password
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end  pe-5 mt-4">
        <button type="button" class="btn btn-secondary">
          Log in
        </button>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <a href="https://www.google.com/" style={{ color: "#686D76" }}>
          Forgot your password ?
        </a>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <h6 style={{ color: "#686D76" }}>or</h6>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-end pe-4">
          <button type="button" className="btn btn-secondary">
            Google
          </button>
        </div>
        <div className="col-md-6 ">
          <button type="button" className="btn btn-secondary">
            Microsoft
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 ">
        <h6 className="text-secondary ">Dont have an account</h6>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="btn btn-secondary">
          Create Account
        </button>
      </div>
    </>
  );
}

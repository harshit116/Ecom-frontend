import React from "react";

export default function Footer() {
  return (
    <div
      className="container-fluid p-3 fw-bold"
      style={{ color: "white", backgroundColor: "#212529" }}
    >
      <div className="row">
        <div className="col-md-6 mb-2">
          © 2024 Project K All Rights Reserved.
        </div>
        <div className="col-md-3 mb-2">Privacy Policy</div>
        <div className="col-md-3 v">Terms of Service</div>
      </div>
    </div>
  );
}

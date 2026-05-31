import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest stock broker"
            className="img-fluid"
            style={{ width: "90%" }}
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-lg-6 col-md-12">

          <h1 className="fs-2 mb-3">
            Largest stock broker in India
          </h1>

          <p className="text-muted">
            2+ million Zerodha clients contribute to over 15% of all
            retail order volumes in India daily by trading and investing in:
          </p>

          {/* LIST SECTION */}
          <div className="row mt-4">

            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>

          </div>

          {/* PRESS LOGOS */}
          <div className="mt-4">
            <img
              src='media/images/pressLogos.png' style={{ width: "90%"}}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;
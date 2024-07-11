const new_arrivals = [
  { name: "Shirt", price: "$100", image: "/shirt.png" },
  { name: "Sweatshirt", price: "$200", image: "/sweatshirt.png" },
  { name: "Sneaker", price: "$300", image: "/sneaker.png" },
  { name: "Jeans", price: "$400", image: "/jeans.png" },
];

export default function Home() {
  const cardBackgroundStyle = {
    backgroundImage: `url('/bg1.jpeg')`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    padding: "40px 0",
  };

  const searchBoxStyle = {
    width: "100%",
  };

  return (
    <div className="container mt-5">
      <div className="card" style={cardBackgroundStyle}>
        <div
          className="card-body"
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="text-white " style={{ marginTop: "180px" }}>
            Wear The Future
          </h1>
          <form style={searchBoxStyle}>
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control border-secondary"
                placeholder="Search for products,brands and more..."
                data-bs-theme="dark"
              />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mt-5">
        <h5>New Arrivals</h5>
        <div className="row mt-5">
          {new_arrivals.map((product, index) => (
            <div className="col-md-3 mb-5" key={index}>
              <div
                className="card h-100"
                data-bs-theme="dark"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              style={{ width: "60%", backgroundColor: "transparent" }}
            >
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h5>Featured Collections</h5>
        <div className="row mt-5">
          {new_arrivals.map((product, index) => (
            <div className="col-md-3 mb-5" key={index}>
              <div
                className="card h-100"
                data-bs-theme="dark"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center mb-4">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              style={{ width: "60%", backgroundColor: "transparent" }}
            >
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5 d-flex flex-column align-items-center">
        <h1>Join ShopCart</h1>
        <span>Sign in to get access to shopping world!!</span>
        <div className="btn-group mt-4" role="group">
          <button type="button" className="btn btn-primary me-3 rounded">
            Sign Up
          </button>
          <button type="button" className="btn btn-secondary rounded">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

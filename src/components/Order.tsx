function Order() {
  const styleObj: React.CSSProperties = {
    marginBottom: "20px",
  };
  const bottomContext: React.CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const totalText: React.CSSProperties = {
    color: "red",
    margin: "0",
  };
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="customer">Select Customer</label>
              <select name="" id="customer" className="form-control">
                <option value="Use Options" disabled defaultValue="Use options">
                  Use Options
                </option>
                <option value="#">Customer 1</option>
                <option value="#">Customer 2</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input
                type="text"
                disabled
                className="form-control"
                id="customerName"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="customerAddress">Customer Address</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="customerAddress"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="customerAddress">Customer Address</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="customerAddress"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="product">Select Product</label>
              <select name="" id="product" className="form-control">
                <option value="Use Options" disabled defaultValue="Use options">
                  Use Options
                </option>
                <option value="#">product 1</option>
                <option value="#">product 2</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="description">Product Description</label>
              <input
                type="text"
                disabled
                className="form-control"
                id="description"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2" style={styleObj}>
            <div className="form-group">
              <label htmlFor="price">Unit Price</label>
              <input
                type="number"
                disabled
                className="form-control"
                id="price"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <div className="form-group">
              <label htmlFor="qty">QTY on Hand</label>
              <input type="number" disabled className="form-control" id="qty" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <div className="form-group">
              <label htmlFor="qty">QTY </label>
              <input disabled type="number" className="form-control" id="qty" />
            </div>
          </div>
          <hr />
          <br />
          <div className="row">
            <div className="col-12 ">
              <button className="btn btn-primary col-12">+ Add Product</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <form className="col-12" style={styleObj}>
              <input
                type="search"
                className="form-control"
                placeholder="Search product here"
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>#Id</th>
                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>QTY</th>
                  <th>Total</th>
                  <th>Delete Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1001</td>
                  <td>Product 1</td>
                  <td>240.00</td>
                  <td>20</td>
                  <td>4800.00</td>
                  <td>
                    <button className=" btn btn-outline-danger btn-sm">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <div className="bottom-context" style={bottomContext}>
              <div className="total-outer">
                <h1 style={totalText}>Total : 2550.00</h1>
              </div>
              <div className="place-order-button-context">
                <button className="btn btn-primary">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Order;

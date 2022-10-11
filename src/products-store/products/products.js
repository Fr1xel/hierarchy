import "./products.css"

const Products = ({ products }) => {
  return (
    <>
      {Object.values(products).map((type, index) => {
        return (
          <div key={index}>
            <h1>{type.title}</h1>
            <table className="products-table" style={{ display: "inline" }}>
              <tr>
                <th>Product</th>
                <th>Cost</th>
              </tr>
              {type.products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        );
      })}
    </>
  );
};

export default Products;

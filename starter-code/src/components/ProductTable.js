import React from "react";
import ProductRow from './ProductRow'


class ProductTable extends React.Component {
  render() {
    console.log(this.props)

    return (
      <React.Fragment>
        <table style={{ width: "50%", margin: "auto" }}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {/* {this.props.products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>
                    {product.name}
                  </td>
                  <td>
                    {product.price}
                  </td>

                </tr>
              )
            }
            )} */}


          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default ProductTable; 
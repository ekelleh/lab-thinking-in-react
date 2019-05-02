import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { dataJSON } from '../data.json'

class FilterableProductTable extends Component {

  state = {
    products: dataJSON
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar />

        {/* <div className="productList">
          {this.state.products.map((product, index) => (
            <ProductTable key={index} product={product} />
          ))}
        </div> */}
      </div>
    )
  }
}

export default FilterableProductTable; 

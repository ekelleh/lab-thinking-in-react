import React from "react";

class SearchBar extends React.Component {

  state = {
    input: ''
  }

  render() {
    return (
      <div>
        <label htmlFor="">Search</label>
        <input type="text" name="input" />
      </div>
    )
  }
}

export default SearchBar; 
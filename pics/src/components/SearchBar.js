import React from "react";

// requires class-level state
class SearchBar extends React.Component {

  onInputchange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* this.onputchange no parenthesis to avoid being called every render.. just pass referfence */}
            <input type="text" onChange={this.onInputchange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

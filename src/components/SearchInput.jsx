import React, { Component } from "react";
import ImageResults from "./ImageResults";
import axios from "axios";

class SearchInput extends Component {
  state = {
    searchText: "",
    amount: 50,
    apiURL: "https://pixabay.com/api",
    apiKEY: "18478867-ed92091f7153f3b3ef17f3f3d",
    images: [],
  };

  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiURL}/?key=${this.state.apiKEY}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => {
    this.setState({ amount: value });
  };

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="find images"
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
        />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default SearchInput;

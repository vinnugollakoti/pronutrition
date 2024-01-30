import React, { Component } from "react";
import "./App.css";
import FoodData from "./resources/FoodData";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: FoodData.map((food) => ({
        name: food.name,
        quantity: 0,
      })),
      searchInput: "",
    };
  }

  resetToZero = () => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) => ({
        ...item,
        quantity: 0,
      })),
    }));
  };

  updateQuantity = (index, value) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item, i) =>
        i === index ? { ...item, quantity: value } : item
      ),
    }));
  };

  handleSearchInput = (e) => {
    this.setState({ searchInput: e.target.value.toLowerCase() });
  };

  render() {
    const filteredItems = this.state.items.filter((item) =>
      item.name.toLowerCase().includes(this.state.searchInput)
    );

    return (
      <div>
        <h2 className="search-tag">Search</h2>
        <input
          type="text"
          value={this.state.searchInput}
          onChange={this.handleSearchInput}
        />

        {/* original with map function */}
        <div className="original">
          {filteredItems.map((item, index) => (
            <div className="main" key={item.name}>
              <img
                src={FoodData.find((food) => food.name === item.name).img}
                alt=""
                width={"100px"}
                height={"100px"}
              />
              <h4>{item.name}</h4>
              <p>{FoodData.find((food) => food.name === item.name).cal} calories</p>
              <input
                type="number"
                min={"0"}
                value={item.quantity}
                onChange={(e) => this.updateQuantity(index, e.target.value)}
              />
              <button onClick={this.resetToZero}>reset</button>
              <h3>{item.quantity} {item.name} = {FoodData.find((food) => food.name === item.name).cal * item.quantity} calories</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import style from "./index.module.scss";
import store from "../../database";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cars: ["suv", "chicken", "something"],
      airports: ["HNL", "KHL"],
      searchItem: "",
      showError: false,
    };
  }

  searchCars = (e) => {
    e.preventDefault();
    if (!this.state.searchItem) {
      this.setState({ showError: true });
    } else {
      document.getElementById("searchInput").value = "";
      this.setState({ searchItem: "" });
      this.setState({ showError: false });
    }
  };

  handleChange = (e) => {
    this.setState({ searchItem: e.target.value });
    console.log(this.state.searchItem);
  };

  renderSuggestions() {
    console.log(this.state.cars);
  }

  render() {
    const { searchItem, cars } = this.state;
    return (
      <div>
        <section className={style.heroContainer}>
          <div className={style.heroItems}>
            <h1>Car Rentals</h1>
            <form onSubmit={this.searchCars}>
              {this.state.showError && (
                <div className={style.error}>Do not leave this blank!</div>
              )}
              <input
                id="searchInput"
                type="text"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label>Pickup Location</label>
              <button type="submit">Submit</button>
            </form>
            {searchItem}
            {/*{store.appData.Airports.map((Airports) => (
              <div key={Airports.name} className={style.projectCard}>
                <h4>{Airports.name}</h4>
              </div>
            ))} */}
            {/*<div className={style.suggestionsContainer}>
              {cars.map((items) => (
                <li key={items}>{items}</li>
              ))}
              </div>*/}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

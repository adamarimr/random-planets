import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { planets } from "./planets";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    this.setState({ planets: planets });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { planets, searchfield } = this.state;
    const filteredPlanets = planets.filter((planets) => {
      return planets.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Secret Planetarium</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList planets={filteredPlanets} />
        </Scroll>
      </div>
    );
  }
}

export default App;

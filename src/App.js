import React, { Component } from "react";
import Displaylist from "./display.jsx";
import "./App.css";
class Addbar extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick = e => {
    e.preventDefault();
    this.state.list.push(e.target.list.value);
    this.setState({ list: this.state.list });
    document.getElementById("myInput").value = "";
    console.log(this.state.list);
  };
  render() {
    return (
      <div id="myform">
        <form onSubmit={this.handleclick}>
          <input
            type="text"
            name="list"
            size="30"
            id="myInput"
            placeholder="Write the task you want to add"
            required
          />
          <span>
            <button class="mybutton" type="submit">
              Add
            </button>
          </span>
        </form>
        <Displaylist myList={this.state.list} />
      </div>
    );
  }
}

export default Addbar;

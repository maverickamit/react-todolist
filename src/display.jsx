import React, { Component } from "react";
import "./display.css";
class Displaylist extends Component {
  constructor(props) {
    super(props);
    this.handledelete = this.handledelete.bind(this);
  }

  handledelete(index) {
    let newList = this.props.myList;
    newList.splice(index, 1);
    this.setState({ myList: newList });
  }
  render() {
    return (
      <div>
        <ol>
          {this.props.myList.map((e, index) => (
            <div>
              <li>
                {e}
                <span>
                  <button
                    type="button"
                    onClick={() => this.handledelete(index)}
                  >
                    Delete
                  </button>
                  <label class="checkbox-label">
                    <input id="check" type="checkbox" />
                    <span class="checkbox-custon"></span>
                  </label>
                </span>
              </li>
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

export default Displaylist;

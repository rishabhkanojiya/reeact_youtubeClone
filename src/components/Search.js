import React, { Component } from "react";

export default class Search extends Component {
  state = { term: "" };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state.term);
          }}
        >
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              name="name"
              value={this.state.term}
              id="name"
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
              placeholder="Search"
              aria-label=""
            />
            <span className="input-group-btn">
              <button
                className="btn btn-outline-danger"
                type="submit"
                aria-label=""
              >
                Search
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

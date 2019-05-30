import React, { Component } from "react";
import Search from "./Search";
import VidList from "./VidList";
import VidDisp from "./VidDisp";
import YtubeAPI from "../Api/YtubeAPI";
import { async } from "q";
import "./App.css";

export default class App extends Component {
  state = { video: [], selectVid: null };

  componentDidMount() {
    this.onSubmitForm("reactJs");
  }

  onSubmitForm = async term => {
    const response = await YtubeAPI.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      video: response.data.items,
      selectVid: response.data.items[0]
    });
  };

  onVidSelect = video => {
    this.setState({ selectVid: video });
  };

  render() {
    return (
      <div>
        <div className=" m-5">
          <Search onSubmit={this.onSubmitForm} />
          <div className="row my-4">
            <div className="col-lg-8">
              <VidDisp video={this.state.selectVid} />
            </div>
            <div className="col-lg-4">
              <VidList
                videos={this.state.video}
                onVidSelect={this.onVidSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

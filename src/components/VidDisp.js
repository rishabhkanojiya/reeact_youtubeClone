import React, { Component } from "react";

export default class VidDisp extends Component {
  render() {
    const video = this.props.video;

    if (!video) {
      return <div>select Any video</div>;
    }

    const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div>
        <div className="card mb-3 border border-danger">
          <div className="text-center p-2">
            <iframe
              title="videoPlayer"
              src={vidSrc}
              style={{ height: "400px", width: "600px" }}
            />
            {/* <img
              src={video.snippet.thumbnails.medium.url}
              className="card-img-top img-fluid"
              alt="..."
              style={{ height: "400px", width: "700px" }}
            /> */}
          </div>
          <div className="card-body">
            <h5 className="card-title">{video.snippet.title}</h5>
            <p className="card-text">{video.snippet.description}</p>
            <p className="card-text">
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

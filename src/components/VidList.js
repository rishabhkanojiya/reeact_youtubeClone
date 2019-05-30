import VidCard from "./VidCard";
import React, { Component } from "react";

export default class VidList extends Component {
  render() {
    const videos = this.props.videos;
    const onVidSelect = this.props.onVidSelect;

    const rendList = videos.map(video => {
      return (
        <VidCard
          key={video.id.videoId}
          video={video}
          onVidSelect={onVidSelect}
        />
      );
    });

    return <div>{rendList}</div>;
  }
}

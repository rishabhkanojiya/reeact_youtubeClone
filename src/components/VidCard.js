import React from "react";

const VidCard = ({ video, onVidSelect }) => {
  return (
    <div className="mb-2" onClick={() => onVidSelect(video)}>
      <div className="card border border-danger" style={{ cursor: "pointer" }}>
        <div className="row align-items-center px-2">
          <div className="col-lg-4 ">
            <img
              style={{ height: "100px", width: "100px" }}
              src={video.snippet.thumbnails.medium.url}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body">
              <h5 className="card-title">{video.snippet.title}</h5>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidCard;

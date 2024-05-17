/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from "moment";
import React from "react";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .second(time)
    .format("H:mm:ss");

  return (
    <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-sm rounded-md">
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;

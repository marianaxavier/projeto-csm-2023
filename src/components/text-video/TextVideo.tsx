import React from "react";

type TextVideoProps = {
  width?: number;
  height?: number;
  video: string;
  videoType: string;
};

const TextVideo = ({ video, videoType, width, height }: TextVideoProps) => {
  return (
    <video controls height={height || 360} width={width || 'auto'}>
      <source src={video} type={videoType}/>
      Your browser does not support the video tag.
    </video>
  );
};

export default TextVideo;

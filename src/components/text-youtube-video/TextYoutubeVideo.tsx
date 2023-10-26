import React from "react";

type TextYoutubeVideoProps = {
  width?: number;
  height?: number;
  youtubeLink: string;
};

const TextYoutubeVideo = ({ youtubeLink, width, height }: TextYoutubeVideoProps) => {
  return(
    <div className="video-container">
      <iframe
        width={ width || 560 }
        height={ height || 315 }
        src={youtubeLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TextYoutubeVideo;

import React from "react";

type TextVideoProps = {
  width?: number;
  height?: number;
  video: string;
  videoType: string;
  videoNumber: number;
  subtitle: string;
};

const TextVideo = ({ width, height, video, videoType, videoNumber, subtitle }: TextVideoProps) => {
  let subtitlePrefix = videoNumber && subtitle ? `Vídeo ${videoNumber} - ` : '';
  return (
    <>
      <video controls height={height || 360} width={width || 'auto'}>
        <source src={video} type={videoType}/>
        Your browser does not support the video tag.
      </video>
      <p style={{fontSize: '85%'}}><b>{subtitlePrefix}</b>{subtitle}</p>
    </>
  );
};

export default TextVideo;

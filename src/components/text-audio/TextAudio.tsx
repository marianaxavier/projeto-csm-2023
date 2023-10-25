import React from "react";

type TextAudioProps = {
  audio: string;
  audioType: string;
  width?: number;
  height?: number;
};

const TextAudio = ({ audio, audioType, width, height }: TextAudioProps) => {
  return(
    <audio controls>
        <source src={audio} type={audioType}/>
        Este navegador não é compatível com a execução de áudios.
    </audio>
  )
};

export default TextAudio;

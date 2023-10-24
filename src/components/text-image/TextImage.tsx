import React from "react";

type TextImageProps = {
  image: string;
  subtitle?: string;
  imageNumber?: number;
  height?: number;
  width?: number;
}

const TextImage = ({ image, subtitle, imageNumber, height, width }: TextImageProps) => {
  let subtitlePrefix = imageNumber && subtitle ? `Imagem ${imageNumber} - ` : '';
  return (
    <>
      <img src={image} alt={subtitle} height={height} width={width}/>
      <p style={{fontSize: '85%'}}><b>{subtitlePrefix}</b>{subtitle}</p>
    </>
  )
}

export default TextImage;

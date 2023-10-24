import React from "react";

type TextImageProps = {
  image: string;
  subtitle?: string;
  imageNumber?: number;
  imageHeight?: number;
  imageWidth?: number;
}

const TextImage = ({ image, subtitle, imageNumber, imageHeight, imageWidth }: TextImageProps) => {
  let subtitlePrefix = imageNumber && subtitle ? `Imagem ${imageNumber} - ` : '';
  return (
    <>
      <img src={image} alt={subtitle} height={imageHeight} width={imageWidth}/>
      <p style={{fontSize: '85%'}}><b>{subtitlePrefix}</b>{subtitle}</p>
    </>
  )
}

export default TextImage;

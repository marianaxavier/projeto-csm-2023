import React from "react";

type TextPdfProps = {
  width?: number;
  height?: number;
  pdfPath: string;
};

const TextPdf = ({ pdfPath, width, height }: TextPdfProps) => {
  return(
    <>
      <object data={pdfPath} type="application/pdf" width="800" height="600">
        <p>Your browser does not support PDFs.</p>
      </object>
    </>
  );
};

export default TextPdf;

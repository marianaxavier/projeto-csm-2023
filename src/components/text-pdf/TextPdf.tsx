import React from "react";

type TextPdfProps = {
  width?: number;
  height?: number;
  pdfPath: string;
  subtitle?: string;
  fileNumber?: number;
};

const TextPdf = ({ pdfPath, width, height, subtitle, fileNumber }: TextPdfProps) => {
  let subtitlePrefix = fileNumber && subtitle ? `Arquivo ${fileNumber} - ` : '';
  return(
    <>
      <object data={pdfPath} type="application/pdf" width="800" height="600">
        <p>Your browser does not support PDFs.</p>
      </object>
      <p style={{fontSize: '85%'}}><b>{subtitlePrefix}</b>{subtitle}</p>
    </>
  );
};

export default TextPdf;

import React from "react";
import { Typography } from "@mui/material";

type ParagraphProps = {
  children: string;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <Typography paragraph align='justify' sx={{textIndent: '30px'}} mt='10px' mb='20px'>
      {children}
    </Typography>
  )
}

export default Paragraph;

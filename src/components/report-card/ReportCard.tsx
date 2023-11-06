import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type CardProps = {
  title: string;
  description: string;
  image: string;
  id: number;
}

export const ReportCard = ({ title, description, image, id }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative', margin: '1rem', width: '500px'}}>
      <CardActionArea href={`/projeto-csm-2023/#/relatorios/${id}`}>
        <CardMedia
          component="img"
          height="200"
          src={image}
          alt="member photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ReportCard;

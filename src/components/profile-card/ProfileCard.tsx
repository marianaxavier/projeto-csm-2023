import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { CardActionArea } from '@mui/material';

type CardProps = {
  name: string;
  course: string;
  favoriteColor: string;
  favoriteAnimal: string;
  curiosity: string;
  photo: string;
  avatar: string;
  link: string;
}

export const ProfileCard = ({ name, course, favoriteColor, favoriteAnimal, curiosity, photo, avatar, link }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative', margin: '1rem', width: '500px'}}>
      <CardActionArea href={link}>
        <CardMedia
          component="img"
          height="200"
          src={photo}
          alt="member photo"
        />
        <CardContent>
          <Avatar
            alt="member avatar"
            src={avatar}
            sx={{position: 'absolute', right: 10, bottom: '47%', width: 56, height: 56}}
          />
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Curso: </b> {course} <br />
            <b>Cor favorita: </b> {favoriteColor} <br />
            <b>Animal favorito: </b> {favoriteAnimal} <br />
            <b>Curiosidade: </b> {curiosity} <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProfileCard;

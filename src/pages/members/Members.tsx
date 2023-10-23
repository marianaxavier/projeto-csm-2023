import React from 'react';
import ProfileCard from '../../components/profile-card/ProfileCard';
import { membersInfo } from '../../data';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


const Members = () => {
  return (
    <>
      <Typography variant="h3" mt={5} mb={2.5}>
        Integrantes do grupo
      </Typography>
      <Divider style={{marginBottom: 2.5}}/>
      <Grid container alignContent='center'>
        {membersInfo.map((member) => (
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <ProfileCard
              name={member.name}
              course={member.course}
              favoriteColor={member.favoriteColor}
              favoriteAnimal={member.favoriteAnimal}
              curiosity={member.curiosity}
              photo={member.photo}
              avatar={member.avatar}
              link={member.link}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Members;

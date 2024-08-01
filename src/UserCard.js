import React from 'react';
import { Card, CardContent, CardMedia, Avatar, Typography, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image={user.image}
        alt={user.name}
      />
      <Avatar 
        alt={user.name} 
        src={user.avatar} 
        sx={{ width: 56, height: 56, margin: 'auto', marginTop: -4, border: '2px solid white' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {user.title}
        </Typography>
        <Grid container justifyContent="center" spacing={1} sx={{ marginTop: 2 }}>
          <Grid item>
            <IconButton color="primary">
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="secondary">
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <LinkedIn />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="default">
              <Twitter />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" sx={{ marginTop: 2 }}>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Follower: {user.follower}k
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Following: {user.following}k
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Total post: {user.posts}k
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserCard;

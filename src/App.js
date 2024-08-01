import logo from "./logo.svg";
import "./App.css";
import { Container, Grid, Typography, Button } from "@mui/material";
import UserCard from "./UserCard";
import image from "./back.png";

const users = [
  {
    name: "Brycen Jimenez",
    title: "HR Recruiter",
    image: "image",
    avatar: "path_to_avatar1",
    follower: 8.06,
    following: 3.04,
    posts: 6.73,
  },
  {
    name: "Giana Brandt",
    title: "Business Consultant",
    image: "image",
    avatar: "path_to_avatar2",
    follower: 3.04,
    following: 6.73,
    posts: 3.95,
  },
  {
    name: "Aspen Schmitt",
    title: "Financial Planner",
    image: "image",
    avatar: "path_to_avatar3",
    follower: 6.73,
    following: 3.95,
    posts: 2.41,
  },
];

function App() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h6">
            User Card
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Button variant="contained" color="primary">
            + New User
          </Button>
        </Grid>
      </Grid>

      <Typography gutterBottom variant="h6" component="div" align="left">
        Dashboard * User * Card
      </Typography>
      <Grid container spacing={4}>
        {users.map((user, index) => (
          <Grid item xs={12} md={4} key={index}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

import { User, useUser } from "../hooks/useUser";
import { fetchMoreUsers } from "../hooks/useLoadMoreUsers";

const UserBoard = () => {
  const { users, setUsers, isLoading } = useUser();

  const handleClick = async () => {
    //call hook to get more users
    const newUsers = await fetchMoreUsers("/?results=5", users);
    if (newUsers) setUsers(newUsers);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        {" "}
        Users Board
      </Typography>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {users?.map((user: User) => (
            <Card sx={{ width: 300 }} key={user.login.uuid}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={user.picture.large}
                  alt="User Picture"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.name.first + " " + user.name.last}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {user.location.city}, {user.location.country}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      )}
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{ marginTop: 2, display: "block", mx: "auto" }}
      >
        Load more
      </Button>
    </Container>
  );
};

export default UserBoard;

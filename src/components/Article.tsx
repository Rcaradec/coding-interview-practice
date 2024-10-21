import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Article = () => {
  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <CardMedia
        component="img"
        height="400"
        image="https://picsum.photos/200/300"
        alt="Article Image"
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Title of the Blog Article
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt lacus at urna dictum, in vehicula lacus viverra. Nulla
          facilisi. Donec volutpat, nisi nec tincidunt lacinia, nunc est
          scelerisque nunc, nec facilisis nisi nisi id quam. Suspendisse
          potenti. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam
          eros, euismod tincidunt nunc nisl euismod nunc.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Article;

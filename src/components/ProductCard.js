import React from "react";
import "../styles/App.scss";
import { Button, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  CardActionArea: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});
function ProductCard(props) {
  return (
    <Card className={props.className} key={props.id} id={props.id}>
      <CardContent>
        <Typography variant="h3">System Recommendations:</Typography>
        <Typography variant="body2" component="p" className={"subhead"}>
          {props.subheading}
        </Typography>
        <CardMedia
          component="img"
          alt={props.productName}
          image={props.img}
          title={props.productName}
        />
        <CardContent>
          <Typography variant="h4">{props.productName}</Typography>
        </CardContent>
        <Button href={props.link} className={"learn-more"}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
export default withStyles(styles)(ProductCard);

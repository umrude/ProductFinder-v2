import React from "react";
import "../styles/App.scss";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      width: "100% !important", // Overrides inline-style
      height: 150,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 95,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.4,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

function ImgCard(props) {
  const classes = useStyles();
  return (
    <Card className={props.className} key={props.id} id={props.id}>
      <CardContent>
        <Typography variant="h5">{props.question}</Typography>
        <Typography variant="body2" component="p">
          {props.subheading}
        </Typography>
        <div className={"image-section"}>
          {props.propsChildren.map((item, indexC) => {
            return (
              <ButtonBase
                key={item.id}
                className={classes.image}
                onClick={() => {
                  props.appendChild(
                    props,
                    indexC,
                    props.depthLevel,
                    props.previousSelections,
                    props.setDepthLevel,
                    props.setPreviousSelections
                  );
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {item.productName}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export { ImgCard };

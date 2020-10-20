import React from "react";
import "../styles/App.scss";
import { Button, Card, Typography } from "@material-ui/core";

export default function Sidebar(props) {
  return (
    <Card>
      {props.sidebar.map((line, index) => (
        <Typography
          key={index}
          variant="body2"
          component="p"
          className="sidebarText"
        >
          {line}
        </Typography>
      ))}
      {props.sidebarLink ? (
        <Button href={props.sidebarLink}>Learn More</Button>
      ) : null}
    </Card>
  );
}

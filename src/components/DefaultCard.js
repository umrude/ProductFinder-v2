import React from "react";
import "../styles/App.scss";
import { Button, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function DefaultCard(props) {
  return (
    <Card className={props.className} key={props.key} id={props.id}>
      <CardContent>
        <Typography variant="inherit" component="h3">
          {props.question}
        </Typography>
        <Typography variant="inherit" component="p" className={"subheading"}>
          {props.subheading}
        </Typography>
        <div className="buttons">
          {props.propsChildren.map((item, indexC) => {
            return (
              <div className={"buttons-context"} key={indexC}>
                <Button
                  disabled={false}
                  keyprop={item.id}
                  key={item.id}
                  id={item.id}
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
                  {item.buttonName}{" "}
                  {item.buttonContext ? (
                    <Typography variant="inherit" component="p">
                      {item.buttonContext}
                    </Typography>
                  ) : null}
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export { DefaultCard };

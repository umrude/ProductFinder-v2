import React, { Fragment } from "react";
import "../styles/App.scss";
import { back } from "../helpers/back";
import { Button } from "@material-ui/core";

export default function ControlButtons(props) {
  return (
    <div className="controlButtons">
      {props.depthLevel <= 0 ? null : (
        <Fragment>
          <Button
            onClick={() =>
              back(
                props.previousSelections,
                props.setPreviousSelections,
                props.depthLevel,
                props.setDepthLevel
              )
            }
          >
            Back
          </Button>
          <Button
            onClick={() => {
              props.setLoaded(false);
              props.setDepthLevel(0);
            }}
          >
            Restart
          </Button>
        </Fragment>
      )}
    </div>
  );
}

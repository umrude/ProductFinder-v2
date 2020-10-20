import React, { memo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { mapData } from "./mapData";
import { Button, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const Map = ({
  setTooltipContent,
  question,
  subheading,
  mapSelection,
  propsChildren,
  setDepthLevel,
  setPreviousSelections,
  setMapSelections,
  depthLevel,
  previousSelections,
}) => {
  const [context, setContext] = useState(null);
  const [subContext, setSubContext] = useState(null);
  const [isSelected, setisSelected] = useState(false);

  function displayTool(currentHover) {
    let selection;
    if (currentHover === "North America") {
      selection = "USA/Canada";
    } else if (currentHover === "Oceania") {
      selection = "New Zealand/Australia";
    } else {
      selection = currentHover;
    }
    setTooltipContent(`${selection}`);
  }

  function displayContent(selection) {
    if (selection === "North America") {
      setContext("USA/Canada");
      setSubContext(
        "Your system will only be operated in these regions. 900MHz or 2.4GHz can be used in these regions"
      );
    } else if (selection === "Oceania") {
      setContext("New Zealand/Australia");
      setSubContext(
        "Your system will only be operated in these regions. 900MHz or 2.4GHz can be used in these regions"
      );
    } else {
      setContext(selection);
      setSubContext(
        "You are based outside of USA, Canada, Australia and/or New Zealand, OR you might travel outside those countries with your system. Only 2.4GHz can be used in these regions"
      );
    }
  }
  const currSelect = {
    default: {
      fill: "#D6D6DA",
      outline: "none",
    },
    hover: {
      fill: "#5DBA75",
      outline: "none",
    },
    pressed: {
      fill: "#5DBA75",
      outline: "none",
    },
  };
  const aftSelect = {
    default: {
      fill: "#5DBA75",
      outline: "none",
    },
    hover: {
      fill: "#5DBA75",
      outline: "none",
    },
    pressed: {
      fill: "#5DBA75",
      outline: "none",
    },
  };

  return (
    <Card className={"default"}>
      <CardContent>
        <Typography variant="inherit" component="h3">
          {question}
        </Typography>
        <Typography variant="inherit" component="p" className={"subheading"}>
          {subheading}
        </Typography>
        <ComposableMap
          data-tip=""
          projectionConfig={{ scale: 135 }}
          width={700}
          height={400}
        >
          <Geographies geography={mapData}>
            {({ geographies }) =>
              geographies.map((geo, index) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    displayTool(geo.properties.continent);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    displayContent(geo.properties.continent);
                    setisSelected(geo.rsmKey);
                  }}
                  style={isSelected === geo.rsmKey ? aftSelect : currSelect}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        <Typography variant="inherit" component="h3">
          {context}
        </Typography>
        <Typography component="p" className={"subheading"}>
          {subContext}
        </Typography>
        {context === null ? null : (
          <Button
            onClick={() =>
              mapSelection(
                context,
                propsChildren,
                setDepthLevel,
                setPreviousSelections,
                setMapSelections,
                depthLevel,
                previousSelections
              )
            }
          >
            Next
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default memo(Map);

import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { back } from "./helpers/back";
import { appendChild } from "./helpers/appendChild";
import { mapSelection } from "./helpers/mapSelection";
import axios from "axios";
import ControlButtons from "./components/ControlButtons";
import renderObject from "./components/RenderObject";
import { start } from "./dataPaths/root";

const App = () => {
  const [depthLevel, setDepthLevel] = useState(0); //How far in nesting they've gone
  const [previousSelections, setPreviousSelections] = useState([start]); //Holds all previous selections for going back
  // uncomment to use API data instead (comment out the line above)
  // const [previousSelections, setPreviousSelections] = useState([]);
  const [content, setContent] = useState(""); // Tooltip for map
  const [loaded, setLoaded] = useState(false); //useEffect only works when this state is changed
  const [data, setData] = useState(); // used so there is only one API request, called by Control Buttons to restart
  const [mapSelections, setMapSelections] = useState(""); // Pass down to renderObject
  let current;

  useEffect(() => {
    axios
      .get("/ABDR", {
        // make request to API
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        let res = response.data;
        setData([res]);
        setPreviousSelections([...previousSelections, res]);
        // eslint-disable-next-line
        current = renderObject(
          previousSelections,
          depthLevel,
          mapSelections,
          setContent,
          content,
          appendChild,
          previousSelections,
          setPreviousSelections,
          setDepthLevel
        );
      })
      .then(() => {
        setLoaded(true);
      });
  }, [loaded]);

  if (loaded) {
    // only call if load === true
    if (previousSelections.length === 1) {
      current = renderObject(
        //if only 1 item in array, load root node
        previousSelections[0],
        depthLevel,
        mapSelection,
        setContent,
        content,
        appendChild,
        previousSelections,
        setPreviousSelections,
        setDepthLevel,
        setMapSelections
      );
    } else {
      current = renderObject(
        //else load the last item in the array
        previousSelections[previousSelections.length - 1],
        depthLevel,
        mapSelection,
        setContent,
        content,
        appendChild,
        previousSelections,
        setPreviousSelections,
        setDepthLevel,
        setMapSelections
      );
    }
  }

  return (
    <div id="renderChild">
      {current}
      <ControlButtons
        depthLevel={depthLevel}
        previousSelections={previousSelections}
        setPreviousSelections={setPreviousSelections}
        back={back}
        setDepthLevel={setDepthLevel}
        loaded={loaded}
        setLoaded={setLoaded}
        data={data}
      ></ControlButtons>
    </div>
  );
};

export default App;

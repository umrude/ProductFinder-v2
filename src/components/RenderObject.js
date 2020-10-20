import React from "react";
import { DefaultCard } from "../components/DefaultCard";
import { ImgCard } from "../components/ImgCard";
import ProductCard from "../components/ProductCard";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";
import Sidebar from "../components/Sidebar";
import { back } from "../helpers/back";

export default function RenderObject(
  props,
  depthLevel,
  mapSelection,
  setContent,
  content,
  appendChild,
  previousSelections,
  setPreviousSelections,
  setDepthLevel,
  setMapSelections
) {
  let display;
  let wrapperClass;

  props["sidebarContext"]
    ? (wrapperClass = "displayObj hasSidebar")
    : (wrapperClass = "displayObj");

  if (props["type"] === "end") {
    display = (
      <ProductCard
        id={props["id"]}
        img={props["img"]}
        link={props["link"]}
        className={props["styleClass"]}
        productName={props["productName"]}
        subheading={props["subheading"]}
        sidebar={props["sidebar"]}
        key={props["id"]}
      ></ProductCard>
    );
  } else if (props["type"] === "map") {
    display = (
      <div>
        <Map
          className={props["styleClass"]}
          question={props["question"]}
          key={props["id"]}
          id={props["id"]}
          subheading={props["subheading"]}
          propsChildren={props["children"]}
          mapSelection={mapSelection}
          setTooltipContent={setContent}
          sidebar={props["sidebar"]}
          setDepthLevel={setDepthLevel}
          previousSelections={previousSelections}
          setPreviousSelections={setPreviousSelections}
          setMapSelections={setMapSelections}
        ></Map>
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
  } else if (props["type"] === "default-img") {
    display = (
      <ImgCard
        className={props["styleClass"]}
        question={props["question"]}
        key={props["id"]}
        id={props["id"]}
        subheading={props["subheading"]}
        propsChildren={props["children"]}
        appendChild={appendChild}
        depthLevel={depthLevel}
        previousSelections={previousSelections}
        setPreviousSelections={setPreviousSelections}
        back={back}
        setDepthLevel={setDepthLevel}
        sidebar={props["sidebar"]}
      ></ImgCard>
    );
  } else if (props["type"] === "default") {
    display = (
      <DefaultCard
        className={props["styleClass"]}
        question={props["question"]}
        id={props["id"]}
        subheading={props["subheading"]}
        propsChildren={props["children"]}
        appendChild={appendChild}
        depthLevel={depthLevel}
        previousSelections={previousSelections}
        setPreviousSelections={setPreviousSelections}
        back={back}
        setDepthLevel={setDepthLevel}
        sidebar={props["sidebar"]}
      ></DefaultCard>
    );
  } else {
    display = (
      <DefaultCard
        className={props["styleClass"]}
        question={props["question"]}
        id={props["id"]}
        subheading={props["subheading"]}
        propsChildren={props["children"]}
        appendChild={appendChild}
        depthLevel={depthLevel}
        previousSelections={previousSelections}
        setPreviousSelections={setPreviousSelections}
        back={back}
        setDepthLevel={setDepthLevel}
        sidebar={props["sidebar"]}
      ></DefaultCard>
    );
  }
  return (
    <div className={wrapperClass}>
      {props["sidebar"] ? (
        <div className="sideBar">
          <Sidebar
            sidebar={props["sidebar"]}
            sidebarContext={props["sidebarContext"]}
          ></Sidebar>
        </div>
      ) : null}
      {display}
    </div>
  );
}

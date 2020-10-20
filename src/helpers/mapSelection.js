function mapSelection(
  selection,
  item,
  callBackA,
  callBackB,
  callBackC,
  depthLevel,
  previousSelections
) {
  if (selection === "USA/Canada" || selection === "New Zealand/Australia") {
    callBackA(depthLevel + 1);
    callBackB([...previousSelections, item[0]]);
    callBackC(selection);
  } else {
    callBackA(depthLevel + 1);
    callBackB([...previousSelections, item[1]]);
    callBackC(selection);
  }
}
export { mapSelection };

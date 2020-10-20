function appendChild(
  elm,
  index,
  depthLevel,
  previousSelections,
  callBackA,
  callBackB
) {
  if (elm.id === previousSelections[previousSelections.length - 1].id) {
    callBackA(depthLevel + 1);
    callBackB([...previousSelections, elm.propsChildren[index]]);
  }
}

export { appendChild };

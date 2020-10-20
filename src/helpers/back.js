function back(arr, callbackState, secondState, setSecondState) {
  if (arr.length === 1) {
    return;
  } else {
    arr.splice(-1, 1);
    callbackState([...arr]);
    setSecondState(secondState - 1);
  }
}

export { back };

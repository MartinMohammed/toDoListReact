import React, { useState } from "react";

// event will be triggered inside component
function InputArea(props) {
  //1. When new text is written f the input, its state should be saved.
  const [inputText, setInputText] = useState("");

  // update inputText - function gets called by component itself
  function handleOnChange(event) {
    // splitting components with states
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input
        //  inputText: state it will re-render automatically
        value={inputText}
        // need function, if on change event is detected
        onChange={(event) => {
          // pass handleOnChange function / will be triggered from the component itself
          handleOnChange(event);
        }}
        name="Task"
        type="text"
      />
      <button
        onClick={() => {
          //2. When the add button is pressed, the current data in the input should be
          // spread/expand new Array with previous list items plus userInput

          // call parent addItem function
          // get the last value of textInput
          props.onAdd(inputText);
          // after adding time we can clear the input of inputField by changing its value
          // remember --> controlled component if state changes, the input value also changes
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

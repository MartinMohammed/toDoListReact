import React from "react";

// stateless component = it is not trying to change itself or anythinge else
// props are read-only & we can pass over props and functions, which gets called by our child component
// to use useState must be inside a component (which is signalized in Title Case)

function ToDoItem(props) {
  return (
    <div
      // when div detects a click ->  call function parent component function (App: deleteItem)
      // inside parantheses = calling function ratherm than passing the function
      // callback function = passed as an argument to another function
      // allow function to call another functions

      // this lambda/anonymous function gets only triggered when the onClick gets triggered
      // else exectured on render
      onClick={() => {
        // basically ToDoItem gets onChecked function/ task / item identifcator (id)
        // so we can specify the id of the individual list item as an argument for the onChecked: parent deleteItem function
        // to remove the specific element in the array which corresponds to the id/index

        // onChecked = delete function 
        props.onChecked(props.id);
      }}
    >
      <li>{props.task}</li>
    </div>
  );
}

// the complete function/component is being returned, so the custom li element
export default ToDoItem;

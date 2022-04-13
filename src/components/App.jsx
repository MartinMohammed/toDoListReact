// single responsiblity principe - each component for different resp.
import React, { useState } from "react";
import ToDoItem from "./toDoItem";
import InputArea from "./InputArea";

function App() {
  // state for taskArray - all tasks are stored in
  const [items, setItems] = useState([]);

  // inputText is an arugment from inputArea component.
  function addItem(inputText) {
    // update state = add one
    setItems((prevTaskTaskarray) => {
      return [...prevTaskTaskarray, inputText];
    });
  }

  // a lot of functional programming in react
  // function gets called from child component toDoItem
  function deleteItem(listItemId) {
    // update items
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        // return all items where the index !=  id that is being passed over.
        // = filter condition
        return index !== listItemId;
      });
    });
  }

  // components section
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* pass child component this.function */}
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {
            //3. The <ul> should display all the array items as <li>s
            /* everytime its state changes (speak: a new task is beed added)
          it will re-render .
          
          index of the current ToDoItem that is being looped throught the items array 
            React advises us not not to use the index for the key and instead use some sort of identifying string 
              => uuid package -> generate unqiue identificator*/
          }
          {items.map((task, index) => {
            // pass property, so we can receive it in component = vs. hardcoded
            // important to have key when map through arrays and create components
            // key = the index of the ToDoItem from the items array
            return (
              <ToDoItem
                key={index}
                id={index}
                task={task}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

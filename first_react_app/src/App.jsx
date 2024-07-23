
import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem from "./components/ToDoItem1";
function App() {
  return (<center class='todo-container'>
    <AppName />
    <AddToDo />
    <ToDoItem/>
    <ToDoItem/>
    <ToDoItem/>
    <ToDoItem/>

  </center >
  );
}

export default App

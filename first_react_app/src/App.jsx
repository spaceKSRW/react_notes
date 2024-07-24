
import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem from "./components/ToDoItem1";
import "./App.css";
function App() {
  return (<center class='todo-container'>
    <AppName />
    <AddToDo />
    <div class='items-container'>
    <ToDoItem/>
    <ToDoItem/>
    <ToDoItem/>
    <ToDoItem/>
    </div>
  </center >
  );
}

export default App

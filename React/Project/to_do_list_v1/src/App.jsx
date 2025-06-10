import New from "./components/NewComp.jsx";
import Apptodo from "./components/AppTodo.jsx";
import Todo1 from "./components/Todo1.jsx";
import Todo2 from "./components/Todo2.jsx";
import "./App.css";
 
function App() {
  return (
      <div className="todo_container">
       <New/>
       <Apptodo/>
       <div className="task-container">
        <Todo1/>
        <Todo2/>
       </div>
       
      </div> 
  )
}
export default App;
import styles from './app.module.css'
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/todoForm';
function App() {
  const [menuStatus, setMenuStatus] = useState("all")
  const [todoList, setTodoList] = useState([]);

  function handleAdd(todo) {
    console.log(todoList);
    setTodoList(prevState => {
      const item = {
        todo,
        completed: false,
        id: uuidv4()
      }
      return [...prevState, item]; 
    })
  }

  return (
    <>
      <div className = {styles.main}>
        <h1 className={styles.header}>#todo</h1>

        <div className = {styles.menu}>
          <div className={styles.menu_category}
            onClick={() => setMenuStatus('all')}>
            <span>All</span>
            <div
              className= { 
                menuStatus === "all" ? styles.underline : null
              }>
            </div>
          </div>

          <div className={styles.menu_category}
            onClick={() => setMenuStatus('active')}>
            <span>Active</span>
            <div
              className= { 
                menuStatus === "active" ? styles.underline : null
              }>
            </div>
          </div>

          <div className={styles.menu_category}
            onClick={() => setMenuStatus('completed')}>
            <span>Completed</span>
            <div
              className= { 
                menuStatus === "completed" ? styles.underline : null
              }>
            </div>
          </div>
        </div>
        {menuStatus !== 'completed' ?
           (<TodoForm handleAdd={handleAdd}/>) : null}
      </div>
    </>
  )
}

export default App

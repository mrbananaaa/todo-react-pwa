import Todos from "./components/Todos";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid'

const style = {
  body: `flex justify-center items-center h-screen max-h-screen bg-dark font-display overflow-scroll`,
  container: `h-full w-full max-w-lg bg-dark`,
  titleWrapper: `pt-14`,
  title: `text-center font-bold text-light text-3xl select-none`,
  inputWrapper: `flex justify-center space-x-4 mx-auto mt-20 w-4/5`,
  input: `px-5 py-3 w-full text-dark outline-none bg-light rounded-lg`,
  addBtn: `bg-light px-5 py-3 rounded-lg font-semibold cursor-pointer`
}

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const addHandler = () => {
    if(input.length === 0) {
      return
    }

    setTodos([
      ...todos,
      {
        id: uuid(),
        text: input
      }
    ])

    setInput('')
  }

  const keyUpHandler = (e) => {
    if(e.code === 'Enter' || e.keyCode === 13) addHandler()
  }

  // get todos from localstorage
  useEffect(() => {
    localStorage.todos && setTodos(JSON.parse(localStorage.todos))
  }, [])

  // save todos to localstorage
  useEffect(() => {
    todos.length === 0 && localStorage.removeItem('todos')
    todos.length !== 0 && localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.titleWrapper}> {/* title */}
          <h1 className={style.title}>
            todo&#x2019;s
          </h1>
        </div>
        <div className={style.inputWrapper}> {/* input */}
          <input 
            type="text" 
            value={input}
            className={style.input} 
            onChange={e => setInput(e.target.value)}
            onKeyUp={keyUpHandler}
          />
          <div 
            className={style.addBtn}
            onClick={addHandler}
          >
            add
          </div>
        </div>
        <TodoList> {/* todos */}
          {todos && todos.map((data) => (
            <Todos key={data.id} data={data} todos={todos} setTodos={setTodos} />
          )).reverse()}
        </TodoList>
      </div>
    </div>
  );
}

export default App;

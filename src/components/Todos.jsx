import { useState } from "react";
import check from "../img/check.svg"
import trash from "../img/trash.svg"

const style = {
  container: `bg-light w-4/5 py-4 px-4 rounded-lg text-dark flex justify-between items-center select-none`,
  contentWrapper: `space-y-3 max-w-[70%] overflow-auto`,
  title: `font-semibold text-dark`,
  titleDone: `font-semibold text-subtitle line-through`,
  subtitle: `text-xs text-subtitle`,
  buttonWrapper: `flex space-x-2`,
  check: `w-[30px] h-[30px] bg-light-green rounded-md flex justify-center items-center cursor-pointer`,
  trash: `w-[30px] h-[30px] bg-light-red rounded-md flex justify-center items-center cursor-pointer`,
}

const Todos = ({ data, todos, setTodos }) => {
  const [isDone, setIsDone] = useState(false)

  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== data.id))
  }

  const doneHandler = () => {
    setIsDone(!isDone)
  }

  return (
    <div className={style.container}>
      <div className={style.contentWrapper}>
        <div className={!isDone ? style.title : style.titleDone}>{ data.text }</div>
        <div className={style.subtitle}>jam berapa</div>
      </div>
      <div className={style.buttonWrapper}>
        <div className={style.check} onClick={doneHandler}>
          <img src={check} alt="done" />
        </div>
        <div className={style.trash} onClick={deleteHandler}>
          <img src={trash} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default Todos;

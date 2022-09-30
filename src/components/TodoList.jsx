const TodoList = ({ children }) => {
  return (
    <div className="mt-20 flex flex-col items-center space-y-4  h-3/6 overflow-auto ">
      {children}
    </div>
  )
}

export default TodoList
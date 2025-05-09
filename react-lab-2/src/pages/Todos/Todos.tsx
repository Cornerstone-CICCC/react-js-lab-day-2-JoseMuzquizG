import { useState, type FormEvent } from "react"
import { Outlet } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import type { Todo } from "../../types/todo.types"

const Todos = () => {

  const [todoInput, setTodoInput] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  

  return (
    <>
      <div className="flex space-between w-full justify-between items-center">
        <h1 className="font-bold">Welcome, {/** user */}</h1>
        <button className="px-3 py-2 rounded-sm bg-black text-sm">Log out</button>
      </div>
      <div>
        <p className="text-sm">Have a great and productive day!</p>
      </div>
      <Outlet />
      <form className="flex gap-3 text-sm">
            <input type="text" className="bg-[#3b3b3b] border-solid border-white rounded-sm p-2 w-full"/>
            <button className="px-3 py-2 rounded-sm bg-black text-sm text-nowrap">Add task</button>
        </form>
    </>
  )
}

export default Todos
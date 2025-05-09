import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Todos from "./pages/Todos/Todos"
import Layout from "./pages/Layout"
import TodoList from "./pages/Todos/TodoList"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}/>
          <Route  path="/todos" element={<Todos />}>
            <Route index element={<TodoList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
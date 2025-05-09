import { Link } from "react-router-dom"
import { useUser } from "../context/useUser"
import type { FormEvent } from "react"

type Props = {
    onLogin: (user: string) => void
}

const Home = ({onLogin}: Props) => {
  const { user, setUser } = useUser()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onLogin(user)
    setUser("")
  }

  const handleDirection = () => {
    if (!user) return "/"
    else return "/todos"
  } 
  
  return (
    <>    
        <h1 className="font-bold">Hi. What's your name?</h1>
        <form onSubmit={handleLogin} className="flex gap-3 text-sm">
            <input 
            value={user}
            onChange={(e) => e.target.value}
            type="text"
            className="bg-[#3b3b3b] border-solid border-white rounded-sm p-2 w-full"/>
            <button className="px-3 py-2 rounded-sm bg-black"><Link to={handleDirection()}>Login</Link></button>
        </form>
    </>
  )
}

export default Home
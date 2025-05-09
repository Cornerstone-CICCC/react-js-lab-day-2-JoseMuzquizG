import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#242424]">
        <div className="flex flex-col gap-3 bg-[#4e4a44] text-white p-[2rem] w-md border-solid rounded-xl">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout
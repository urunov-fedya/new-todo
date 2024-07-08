import { Outlet } from "react-router-dom"
import { useTodo } from "@/app/providers"
import { Sidebar } from "@/widgets"
import { useEffect } from "react"
import { getStorage } from "@/shared"
import cls from "./CoreLayout.module.scss"

const CoreLayout = () => {
  const { setTodos } = useTodo();
  useEffect(() => {
    setTodos(getStorage())
  }, [setTodos])

  return (
    <main className={cls.wrapper}>
      <Sidebar />
      <div className={cls.conent}>
        <Outlet />
      </div>
    </main>
  )
}

export default CoreLayout;

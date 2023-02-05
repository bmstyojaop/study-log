import React, { FC } from "react"
import { Header } from "./components/Header"

const App: FC = () => {
  return (
    <div>
      <Header />
      <main className="bg-yellow-100 w-screen h-screen">
        <div className=" bgcontainer"></div>
      </main>
    </div>
  )
}

export default App
